// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {v4 as uuid} from 'uuid'
type Data = {
  token: string;
  username: string;
  password: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    res.status(200).json({
      token: uuid(),
      username: req.body.username,
      password: req.body.password
    });
  }
}
