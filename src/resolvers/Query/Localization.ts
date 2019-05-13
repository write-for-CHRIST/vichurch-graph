import { Context } from '../../utils'

export interface Label {
  key: string
  text: string
}

export async function labels(
  parent,
  { code },
  ctx: Context,
): Promise<Array<Label>> {
  const query = `
    query labels($code: String) {
      translations(where: {language: {code: $code}}) {
      language {
        name
      }
      localization {
        key
      }
      text
    }
    }
  `
  const res = await ctx.prisma.$graphql(query, { code })
  const labels = res.translations.map((r: any) => ({
    key: r.localization.key,
    text: r.text,
  }))
  return labels
}

export async function localizations(parent, args, ctx: Context) {
  return ctx.prisma.localizations()
}
