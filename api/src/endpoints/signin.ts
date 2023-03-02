import { encodeJWT, JWT_COOKIE_NAME } from '../jwt/jwt';
import { Request, Response } from 'express';

module.exports = function signin(_req: Request, res: Response) {
  const success = true;
  const token = encodeJWT({ email: 'felippe.moraes@zoho.com', active: true });

  res
    .cookie(JWT_COOKIE_NAME, token, { maxAge: 900000 })
    .status(success ? 200 : 401)
    .json({ success });
};