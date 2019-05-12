import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../../utils'

export async function signup(parent, args, ctx: Context) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.prisma.createUser({ ...args, password })

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}

export async function login(parent, { username, password }, ctx: Context) {
  const user = await ctx.prisma.user({ username })
  if (!user) {
    throw new Error(`No such user found as: ${username}`)
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}
