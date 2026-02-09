import type { ContactMethodType } from '~/types/profile'

export interface ContactMeta {
  icon: string
  label: string
}

const contactMeta: Record<ContactMethodType, ContactMeta> = {
  website: { icon: 'i-lucide-globe', label: 'Website' },
  linkedin: { icon: 'i-simple-icons-linkedin', label: 'LinkedIn' },
  github: { icon: 'i-simple-icons-github', label: 'GitHub' },
  email: { icon: 'i-lucide-mail', label: 'E-mail' },
  phone: { icon: 'i-lucide-phone', label: 'Bellen' }
}

/**
 * Get metadata (icon and default label) for a contact method type
 */
export function useContactMeta() {
  function getMeta(type: ContactMethodType): ContactMeta {
    return contactMeta[type] ?? { icon: 'i-lucide-link', label: 'Contact' }
  }

  function getIcon(type: ContactMethodType): string {
    return getMeta(type).icon
  }

  function getLabel(type: ContactMethodType): string {
    return getMeta(type).label
  }

  return {
    getMeta,
    getIcon,
    getLabel
  }
}
