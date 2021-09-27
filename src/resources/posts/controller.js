const prisma = require("../../utils/database")

const Post = prisma.post

const getAll = async (req, res) => {
  const user = req.user

  try {
    const posts = await Post.findMany({
      where: {
        userId: user.id,
      },
    })

    res.json({ posts })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = {
  getAll,
}
