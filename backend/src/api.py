import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
import sys
from flask_cors import CORS

from .database.models import db_drop_and_create_all, setup_db, Drink
from .auth.auth import AuthError, requires_auth

app = Flask(__name__)
setup_db(app)
CORS(app)

# db_drop_and_create_all()

# ROUTES
@app.route('/drinks')
def get_drinks():
    error = False
    # Fetching a list of drinks from database
    all_drinks = Drink.query.all()

    for drink in all_drinks:
        print(drink.short())
    if not all_drinks:
        abort(404)

    try:
        drinks = [drink.short() for drink in all_drinks]
        res = {
            "success": True,
            "drinks": drinks
        }
    except Exception:
        error = True
        print(sys.exc_info())

    if error:
        abort(422)

    return jsonify(res), 200


@app.route('/drinks-detail')
@requires_auth('get:drinks-detail')
def get_drinks_details(jwt):
    error = False
    drinks = Drink.query.all()

    if not drinks:
        abort(404)
    try:
        drink_details = [drink.long() for drink in drinks]
        res = {
            "success": True,
            "drinks": drink_details
        }
    except Exception:
        error = True
        print(sys.exc_info())

    if error:
        abort(422)
    else:
        return jsonify(res), 200


@app.route('/drinks', methods=['POST'])
@requires_auth('post:drinks')
def add_drink(jwt):
    error = False
    req = request.get_json()

    try:
        title = req['title']
        drink_recipe = json.dumps([req['recipe']])
        # Adding the drink to database
        new_drink = Drink(
            title=title,
            recipe=drink_recipe
        )
        new_drink.insert()
        res = {
            'success': True,
            'drinks': [new_drink.long()]
        }
    except Exception:
        error = True
        abort(400)

    return jsonify(res), 200


@app.route('/drinks/<int:id>', methods=['PATCH'])
@requires_auth('patch:drinks')
def editing_drinks(jwt, id):
    error = False
    drink = Drink.query.get(id)

    # Aborting if no drink matches with the id given
    if not drink:
        error = True
        abort(404)

    req = request.get_json()
    try:
        title = req.get('title')
        recipe = req.get('recipe')
        if title:
            drink.title = req['title']
        if recipe:
            drink.recipe = json.dumps(req['recipe'])
        drink.update()
        res = {
            "success": True,
            "drinks": [drink.long()]
        }
    except Exception:
        error = True
        abort(400)

    return jsonify(res), 200


@app.route('/drinks/<int:id>', methods=['DELETE'])
@requires_auth('delete:drinks')
def delete_drink(jwt, id):
    error = False
    drink = Drink.query.get(id)

    # Aborting if no drink matches with the id given
    if not drink:
        abort(404)

    try:
        drink.delete()
        res = {
            "success": True,
            "delete": id
        }
    except Exception:
        error = True
        print(sys.exc_info())

    if error:
        abort(422)

    return jsonify(res), 200


# Error Handling
@app.errorhandler(422)
def unprocessable(error):
    return jsonify({
        "success": False,
        "error": 422,
        "message": "unprocessable"
    }), 422


@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "no drinks found"
    }), 404


@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        "success": False,
        "error": 400,
        "message": "bad request"
    }), 400


@app.errorhandler(AuthError)
def auth_error(error):
    return jsonify({
        "success": False,
        "error": error.status_code,
        "message": error.error['description']
    }), error.status_code

