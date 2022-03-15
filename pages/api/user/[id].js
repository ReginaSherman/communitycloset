import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // GET ITEM BY ID
      const id = req.query.id;
      console.log(id)

      const user = await prisma.User.findUnique({
        where: {
          id
        },
        include: {
          clothingItems: true,
        }
      });

      res.status(200).json({
        user
      });
    } else if (req.method === 'PUT') {
      // implement
      // user authorization (check userId on session against userId on user)
    } else if (req.method === 'DELETE') {
      // implement
      // user authorization (check userId on session against userId on user)
    } else {
      res.status(405).end();
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
}