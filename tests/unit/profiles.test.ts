import { describe, it, expect } from 'vitest'
import { profiles } from '../../app/data/profiles'

describe('profiles data', () => {
  it('should contain at least two profiles', () => {
    expect(profiles.length).toBeGreaterThanOrEqual(2)
  })

  it('should include Marcel and Daan', () => {
    const names = profiles.map(p => p.name)
    expect(names).toContain('Marcel')
    expect(names).toContain('Daan')
  })

  it('should have unique slugs', () => {
    const slugs = profiles.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('should have all required fields for each profile', () => {
    for (const profile of profiles) {
      expect(profile.name).toBeTruthy()
      expect(profile.slug).toBeTruthy()
      expect(profile.descriptor).toBeTruthy()
      expect(profile.contacts).toBeInstanceOf(Array)
      expect(profile.contacts.length).toBeGreaterThan(0)
    }
  })

  it('should have valid contact URLs', () => {
    const validTypes = ['website', 'linkedin', 'github', 'email', 'phone']

    for (const profile of profiles) {
      for (const contact of profile.contacts) {
        expect(validTypes).toContain(contact.type)
        expect(contact.url).toBeTruthy()

        // Validate URL format based on type
        if (contact.type === 'email') {
          expect(contact.url).toMatch(/^mailto:/)
        } else if (contact.type === 'phone') {
          expect(contact.url).toMatch(/^tel:/)
        } else {
          expect(contact.url).toMatch(/^https?:\/\//)
        }
      }
    }
  })
})
