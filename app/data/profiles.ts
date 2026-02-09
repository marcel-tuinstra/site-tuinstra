import type { Profile } from '~/types/profile'

export const profiles: Profile[] = [
  {
    name: 'Marcel',
    slug: 'marcel',
    descriptor: 'Full-Stack Developer',
    avatarUrl: 'https://github.com/marcel-tuinstra.png',
    contacts: [
      { type: 'website', url: 'https://marcel.tuinstra.dev' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/marcel-tuinstra-6a98895a/' },
      { type: 'github', url: 'https://github.com/marcel-tuinstra' },
      { type: 'email', url: 'mailto:marcel@tuinstra.dev' }
    ]
  },
  {
    name: 'Daan',
    slug: 'daan',
    descriptor: 'Lecturer CMGT / Researcher XR',
    avatarUrl: 'https://github.com/SkyKingdom.png',
    contacts: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/daan-tuinstra-24660210a/' },
      { type: 'github', url: 'https://github.com/SkyKingdom' },
      { type: 'email', url: 'mailto:daantuinstra@hotmail.com' }
    ]
  }
]
