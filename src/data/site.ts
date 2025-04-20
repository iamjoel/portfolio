export enum Category {
  'all' = 'all',
  'web' = 'web',
  'mobile' = 'mobile',
  'design' = 'design',
  'others' = 'others',
}

const site = {
  title: 'Portfolio',
  description: 'A collection of portfolios.',
  categories: [
    { id: Category.all, label: 'All Works' },
    { id: Category.web, label: 'Web Development' },
    { id: Category.mobile, label: 'Mobile Apps' },
    { id: Category.design, label: 'Design' },
    { id: Category.others, label: 'Others' },
  ]
}

export default site
