import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const clothingItems = await prisma.clothingItem.findMany();
            res.status(200).json({
                clothingItems
            });
        } else {
            res.status(405).end();
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Server Error');
    }
}