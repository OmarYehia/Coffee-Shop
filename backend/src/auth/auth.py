import json
from flask import request, _request_ctx_stack
from functools import wraps
from jose import jwt
from urllib.request import urlopen


AUTH0_DOMAIN = 'oyehia-coffee-shop.eu.auth0.com'
ALGORITHMS = ['RS256']
API_AUDIENCE = 'drinks'

# AuthError Exception
'''
AuthError Exception
A standardized way to communicate auth failure modes
'''




class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


# Auth Header

def get_token_auth_header():
    # Checking if the header contains 'Authorization' part
    if 'Authorization' not in request.headers:
        raise AuthError({
            'code': 'missing_authorization_header',
            'description': 'Authorization header is expected'
        }, 401)

    auth_header = request.headers['Authorization']
    bearer_token = auth_header.split(" ")

    # Token must be in the form of 'bearer <token>'. Any other form is invalid
    if len(bearer_token) != 2:
        raise AuthError({
            'code': 'invalid_authorization_header',
            'description': 'Authorization header is expected to be exactly two arguements'
        }, 401)
    elif bearer_token[0].lower == 'bearer':
        raise AuthError({
            'code': 'invalid_authorization_header',
            'description': 'Authorization header is expected to be a bearer token'
        }, 401)
    else:
        return bearer_token[1]



def check_permissions(permission, payload):
    # Checking if there's permissions within the JWT payload
    if 'permissions' not in payload:
        raise AuthError({
            'code': 'invalid_claims',
            'description': 'Permissions not included in JWT.'
        }, 400)

    # Checking if the required permission for endpoint is within those permissions
    if permission not in payload['permissions']:
        raise AuthError({
            'code': 'unauthorized',
            'description': 'Permission not found.'
        }, 401)
    return True


def verify_decode_jwt(token):
    # A boiler plate for verifying the JWT
    jsonurl = urlopen(f'https://{AUTH0_DOMAIN}/.well-known/jwks.json')
    jwks = json.loads(jsonurl.read())
    unverified_header = jwt.get_unverified_header(token)
    rsa_key = {}
    if 'kid' not in unverified_header:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization malformed.'
        }, 401)

    for key in jwks['keys']:
        if key['kid'] == unverified_header['kid']:
            rsa_key = {
                'kty': key['kty'],
                'kid': key['kid'],
                'use': key['use'],
                'n': key['n'],
                'e': key['e']
            }
    if rsa_key:
        try:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=ALGORITHMS,
                audience=API_AUDIENCE,
                issuer='https://' + AUTH0_DOMAIN + '/'
            )

            return payload

        except jwt.ExpiredSignatureError:
            raise AuthError({
                'code': 'token_expired',
                'description': 'Token expired.'
            }, 401)

        except jwt.JWTClaimsError:
            raise AuthError({
                'code': 'invalid_claims',
                'description': 'Incorrect claims. Please, check the audience and issuer.'
            }, 401)
        except Exception:
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Unable to parse authentication token.'
            }, 400)
    raise AuthError({
        'code': 'invalid_header',
                'description': 'Unable to find the appropriate key.'
    }, 400)


def requires_auth(permission=''):
    def requires_auth_decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = get_token_auth_header()
            payload = verify_decode_jwt(token)
            check_permissions(permission, payload)
            return f(payload, *args, **kwargs)

        return wrapper
    return requires_auth_decorator
