// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// typing the response is not super necessary as nothing is really consuming it
// can still devine a DTO or something for the future
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: "John Doe" });
}
