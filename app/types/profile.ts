export interface Profile {
  /** Display name */
  name: string
  /** URL-friendly slug (e.g., 'marcel', 'daan') */
  slug: string
  /** Short descriptor / role */
  descriptor: string
  /** Call-to-action link (external portfolio or profile) */
  ctaLink: string
  /** Call-to-action label */
  ctaLabel: string
}
