import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // GET ITEM BY ID
      const id = req.query.id;

      const clothingItem = await prisma.clothingItem.findUnique({
        where: {
          id
        }
      });

      res.status(200).json({
        clothingItem
      });
    } else if (req.method === 'PUT') {
      // implement
      // user authorization (check userId on session against userId on item)
    } else if (req.method === 'DELETE') {
      // implement
      // user authorization (check userId on session against userId on item)
    } else {
      res.status(405).end();
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
}