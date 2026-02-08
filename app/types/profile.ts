/** Supported contact method types */
export type ContactMethodType = 'website' | 'linkedin' | 'github' | 'email' | 'phone'

/** A single contact method for a profile */
export interface ContactMethod {
  /** The type of contact method */
  type: ContactMethodType
  /** The URL or value (e.g., https://, mailto:, tel:) */
  url: string
  /** Optional custom label, otherwise derived from type */
  label?: string
}

export interface Profile {
  /** Display name */
  name: string
  /** URL-friendly slug (e.g., 'marcel', 'daan') */
  slug: string
  /** Short descriptor / role */
  descriptor: string
  /** Optional bio / tagline for the business card */
  bio?: string
  /** Contact methods displayed in order (all optional) */
  contacts: ContactMethod[]
}
