import { getUserId, Context } from '../../utils'

export const Query = {
  translation(parent, { id }, ctx: Context) {
    return ctx.prisma.translation({ id })
  },
  localization(parent, { id }, ctx: Context) {
    return ctx.prisma.localization({ id })
  },
  profile(parent, { id }, ctx: Context) {
    return ctx.prisma.profile({ id })
  },
  activitySchedules(parent, args, ctx: Context) {
    return ctx.prisma.activitySchedules()
  },
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
  async getLocalizationsByLang(parent, { lang }, ctx: Context, info) {
    console.log('Fetch localization for lang', lang)
    const localizations = await ctx.prisma.localizations()
    return localizations
  },
}
