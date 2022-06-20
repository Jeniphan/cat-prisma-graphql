import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'jeni.pukkham@gmail.com',
      name: 'Akiira',
    }
  })
  const newPost = await prisma.post.create({
    data: {
      title: 'Akiira',
      content: 'Hi my name is Akiira.',
      authorId: 1
    },
  })
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })