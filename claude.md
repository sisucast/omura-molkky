# Claude Code Instructions for omura-molkky

## Design & Icon Rules

### ✅ Icon Selection Rule
- **Must use** `better-icons` skill to select icons from Lucide or Phosphor Icons
- **Prohibited**: SVG自作（Do NOT create custom SVG icons）
- Usage: Search with `better-icons search <query>` or get SVG with `better-icons get <id>`

### ✅ Color Palette Rule
- **Avoid**: AI標準の鮮やかなグラデーション（Bright gradients）
- **Use**: 彩度を抑えたプロフェッショナルなトーン（Muted, professional tones）
- Reference: molkky brand colors are already defined in tailwind.config.js
  - Yellow: #FFD600
  - Blue: #1A237E
  - Pink: #E91E8C
  - Wood: #C8882C

### ✅ Spacing & Grid Rule
- **8pt Grid System**: All spacing must be multiples of 4px, 8px, 16px, etc.
- Examples: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`...
- Tailwind spacing values: `px-4`, `px-6`, `px-8`, `gap-4`, `gap-6`, etc.

## Design Tools Available

- **better-icons**: Icon selection from 200+ libraries (Lucide, Phosphor, etc.)
- **web-design-guidelines**: Vercel's web design best practices
- **software-ui-ux-design**: UI/UX professional guidelines
- **ui-design**: UI design patterns
- **frontend-design**: Anthropic's frontend design guidance

## Technology Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v3 + custom config
- **Fonts**: Anton (headings), Noto Sans JP (body)
- **Icons**: lucide-react (integrated)
- **Deployment**: Cloudflare Pages

## Brand Guidelines

- **Target Event**: 第1回大村モルックカップ (2026.4.19)
- **Color Scheme**: Yellow (#FFD600), Navy Blue (#1A237E), Pink (#E91E8C)
- **Typography**: Bold & playful for headings, clean for body
- **Theme**: Sports event, community-focused, energetic

## Important Notes

- Event date: April 19, 2026
- Heroku for backend: `sales@sisucast.com`
- Google Forms integration for registration
