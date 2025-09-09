export type NavLink = { name: string; destination: string }

// Centralized navigation links used by MiniHeader and TheFooter
export const navLinks: NavLink[] = [
  { name: 'オープンソース', destination: '/OpenSource' },
  { name: 'macOS版', destination: '/macOS' },
  { name: 'カスタムタブ', destination: '/CustomTabs' },
  { name: '利用規約', destination: '/TermsOfService' },
  { name: 'プライバシーポリシー', destination: '/PrivacyPolicy' },
  { name: 'Q&A', destination: '/QA' },
  { name: 'お問い合わせ', destination: '/Contact' }
]

