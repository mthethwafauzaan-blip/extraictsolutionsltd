# Design Guidelines: EXTRA ICT SOLUTIONS LTD

## Design Approach
**System-Based Approach** - Professional B2B service company requiring clarity, credibility, and accessibility. Drawing from Material Design principles with emphasis on clean information architecture and trust-building elements.

## Typography System

**Font Families:**
- Primary: Inter or "Segoe UI" (clean, professional sans-serif)
- Headings: Same as primary for consistency

**Scale:**
- Hero Headline: text-4xl md:text-6xl, font-bold
- Section Headers (h2): text-3xl md:text-4xl, font-bold
- Card Titles (h3): text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Print/Footer: text-sm

## Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element gaps: gap-6 md:gap-8
- Container max-width: max-w-6xl

**Grid Structure:**
- Services grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Leadership team: grid-cols-1 md:grid-cols-3
- Contact info: 2-column layout on desktop

## Component Library

### Hero Section
- Full-width with large background image (office/technology scene)
- Dark gradient overlay for text readability
- Centered company logo (max-w-xs, with subtle shadow)
- Tagline beneath logo
- Primary CTA button with blurred background (backdrop-blur-sm bg-white/20)
- Height: min-h-[70vh]

### Navigation (Add)
- Sticky top navigation with company logo (smaller version)
- Links: About, Services, Why Us, Contact
- Mobile: Hamburger menu
- Background: Subtle blur with shadow on scroll

### Service Cards
- Equal height cards with image, icon, title, description
- Images: 16:9 aspect ratio, object-cover
- Hover: Subtle lift effect (transform translate-y-1)
- Shadow: Soft elevation

### Information Sections
- Two-column layout for Mission/Vision
- About section: Single column with max-w-4xl for readability
- Leadership: Grid of cards with photos, names, titles

### Why Choose Us
- Icon + text list items
- Icons: Use Heroicons (outline style)
- Two-column grid on desktop

### Contact Section
- Distinctive background treatment
- Split layout: Contact form (left) + Info/Map (right)
- Form fields: Full-width inputs with clear labels
- Include: Google Maps embed showing Kansanga location

### Footer
- Dark background
- Three columns: Company info, Quick links, Social media
- Copyright and credentials at bottom
- Social icons: LinkedIn, Facebook, Twitter

## Images

**Hero Background:**
- Professional office environment or technology/networking equipment
- High quality, 1920x1080 minimum
- Should convey professionalism and modern technology

**Service Card Images:**
1. Computer equipment/laptop repair workspace
2. Network cables/server room
3. Software development/coding screen
4. Training session/classroom setting

**Leadership Team:**
- Professional headshots (if available)
- Otherwise: Professional placeholder avatars
- Circular crops with subtle border

**About Section:**
- Optional: Office photo or team working image
- Placement: Right side of text content

## Animations
**Minimal and Purposeful:**
- Scroll-triggered fade-in for sections (subtle, once)
- Card hover states only
- Smooth scrolling for anchor links
- No autoplay animations

## Accessibility
- Form labels and inputs properly associated
- Focus states clearly visible
- Alt text for all images
- Sufficient contrast ratios throughout
- Keyboard navigation support

## Key Design Principles
1. **Credibility First:** Professional appearance builds trust
2. **Information Hierarchy:** Clear scannable sections
3. **Mobile-First:** Fully responsive across all devices
4. **Performance:** Optimized images, minimal dependencies
5. **Action-Oriented:** Clear CTAs guiding users to contact