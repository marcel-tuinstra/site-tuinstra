import type { Profile } from '~/types/profile'

export const profiles: Profile[] = [
  {
    name: 'Marcel',
    slug: 'marcel',
    descriptor: 'Developer & Designer',
    contacts: [
      { type: 'website', url: 'https://marcel.tuinstra.dev' },
      { type: 'linkedin', url: 'https://linkedin.com/in/marceltuinstra' },
      { type: 'github', url: 'https://github.com/marcel-tuinstra' },
      { type: 'email', url: 'mailto:marcel@tuinstra.dev' }
    ]
  },
  {
    name: 'Daan',
    slug: 'daan',
    descriptor: 'Developer & Gamer',
    contacts: [
      { type: 'linkedin', url: 'https://linkedin.com/in/daantuinstra' },
      { type: 'github', url: 'https://github.com/daantuinstra' },
      { type: 'email', url: 'mailto:daan@tuinstra.dev' }
    ]
  }
]
