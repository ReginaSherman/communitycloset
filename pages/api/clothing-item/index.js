import { prisma } from '../../../lib/prisma';
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const userId = session?.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    if (req.method === 'POST') {
      const {
        name,
        image,
        category,
        description,
        size
      } = req.body;

      console.log('prisma', prisma);
      
      // database insert
      const createdItem = await prisma.clothingItem.create({
        data: {
          name,
          image,
          category,
          description,
          size,
          user: {
            connect: {
              id: userId,
            }
          }
        }
      });

      console.log(createdItem);

      res.status(200).json({
        createdItem: createdItem,
      });

    } else {
      res.status(405).end();
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
};
