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
 * - Cards use transparent backgrounds to show grid through
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
            root: 'bg-transparent ring-2 ring-default divide-y divide-default'
          }
        }
      }
    }
  }
})
