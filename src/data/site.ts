export enum Category {
  'all' = 'all',
  'web' = 'web',
  'mobile' = 'mobile',
  'design' = 'design',
  'others' = 'others',
}

export const categories = [
  { id: Category.all, label: 'All Works' },
  { id: Category.web, label: 'Web Development' },
  { id: Category.mobile, label: 'Mobile Apps' },
  { id: Category.design, label: 'Design' },
  { id: Category.others, label: 'Others' },
]

const site = {
  title: 'Portfolio',
  description: 'A collection of portfolios.',
  categories,
  githubRepo: 'https://github.com/iamjoel/portfolio-template'
}

export default site
