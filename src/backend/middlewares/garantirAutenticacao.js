const { verify } = require('jsonwebtoken')
const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token não informado.', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: usuario_id } = verify(token, authConfig.jwt.secret)

    request.usuario = {
      id: Number(usuario_id)
    }

    return next()
  } catch {
    throw new AppError('JWT Token inválido.', 401)
  }
}

module.exports = ensureAuthenticated
