import { Context } from '../../utils'

export async function getLocalizationsByLang(
  parent,
  { lang },
  ctx: Context,
  info,
) {
  console.log('Fetch localization for lang', lang)
  const map = new Map()
  const localizations = await ctx.prisma.localizations()
  for (let l of localizations) {
    const key = l.key
    console.log(key)
  }
  return localizations
}
