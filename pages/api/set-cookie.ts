/* eslint @next/next/no-page-custom-font: 0 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function setCartTokenCookie(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body.cookie) {
    res.setHeader('Set-Cookie', `our-cookie=${req.body.cookie};`);
    res.setHeader('content-type', 'application/JSON');
    res.end(res.getHeader('Set-Cookie'));
  } else {
    res.status(400).json({ message: 'No cookie token to set' });
  }
}
