import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prisma = new PrismaClient({
  log: ['query'],
});

app.get('/api/games', async (request, response) => {

  const games = await prisma.game.findMany();

  return response.json({games});
})

app.listen(3333, () => {
  console.log('Server started at http://localhost:3333');
});