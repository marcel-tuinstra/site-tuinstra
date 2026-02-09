/**
 * Design Tokens for tuinstra.dev
 *
 * Typography:
 * - Font: JetBrains Mono (monospace) - configured in main.css via @fontsource
 * - Developer aesthetic with consistent monospace throughout
 *
 * Color Palette:
 * - Primary: Blue - used for interactive elements and accents
 * - Neutral: Zinc - used for text, backgrounds, and borders
 * - Both profiles use the same color scheme (no differentiation)
 *
 * Avatar Style:
 * - Source: GitHub profile photos (github.com/{username}.png)
 * - Shape: Rounded square (rounded-lg class)
 * - Size: 3xl on cards and profile pages
 * - Fallback: Initials via UAvatar alt prop
 *
 * Background:
 * - Animated grid pattern (defined in main.css)
 * - Cards use opaque zinc-900 backgrounds, floating above grid
 *
 * Visual Style: Refined Brutalist
 * - Solid opaque cards with subtle ring borders
 * - Offset hover effect (translate) for depth
 * - Uppercase title with wide tracking
 */
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    },
    card: {
      variants: {
        variant: {
          outline: {
            root: 'bg-zinc-900 ring-1 ring-zinc-700 divide-y divide-zinc-800'
          }
        }
      }
    }
  }
})
