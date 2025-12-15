export const seo = {
  title: 'Cali Castle | 开发者、设计师、细节控、',
  description:
    '我叫 JW，我想表达我自己，所以你在这里和我见面！',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
