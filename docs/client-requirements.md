# Swaddeep Website — Client Requirements

## Project workflow

- This document is the source of truth for requirements gathered from client-provided screenshots and notes.
- Do not begin final implementation until the client has supplied the required content and approved the documented direction.
- Recreate the reference site's visual language and interaction model with original code and Swaddeep-owned content/assets.

## Global requirements

### Typography and sizing

- Use the fonts already configured in the project:
  - Bebas Neue for tall condensed display text.
  - Amithen for brush/script display text.
  - Work Sans for body copy, navigation, and supporting text.
- Use `rem` units for fixed typography, spacing, dimensions, and positioning wherever practical.
- Fluid CSS functions such as `clamp()` may be used, with `rem` values for their fixed bounds.
- Preserve the strong contrast between oversized display typography and smaller supporting copy.

### Responsive behaviour

- The large-screen composition applies at and above the `lg` breakpoint.
- Below `lg`, create a deliberate responsive composition rather than proportionally shrinking the desktop layout.
- Ensure intermediate (`md`) and small-screen layouts have appropriate wrapping, spacing, alignment, and readable typography.
- Avoid horizontal overflow and preserve the intended hierarchy on every viewport.

### Accessibility and motion

- Interactive elements must remain keyboard accessible and display a visible focus state.
- Images require meaningful alternative text unless they are purely decorative.
- Motion must respect `prefers-reduced-motion`.

## Homepage

### Reference 01 — Hero and changing-image section

Status: initial visual reference received.

#### Structure

1. Global header over a solid Swaddeep brand-red background.
2. Large hero section using an asymmetrical two-column desktop composition.
3. An Explore/down-arrow control overlapping the boundary between the red hero and the image section.
4. A full-width visual/project section directly below the hero.
5. The visual section contains multiple images that change automatically every few seconds.

#### Header observations

- The header is fixed at the top of the viewport and remains visible while the page scrolls.
- Page content must be offset correctly so the fixed header does not cover the hero or changing-image content.
- Logo is aligned near the upper-left edge.
- A rounded-outline “Let's talk” button and menu icon are aligned at the upper-right.
- Header elements use white on the red background.
- The header has generous horizontal and vertical breathing room on desktop.
- The desktop header shown in the reference is the approved structural and visual direction.
- Exact Swaddeep header content and final navigation behaviour are pending client content/confirmation.

#### Hero observations

- Background colour is the existing Swaddeep red (`#c4122f`) unless the client later supplies a revised value.
- The left side carries the main statement:
  - Tall condensed uppercase first line.
  - Much larger white brush/script second line.
- The right side carries:
  - A thin decorative plus/cross between the main headline and supporting copy.
  - A short introductory paragraph.
  - A second line/group of sector links with underlines and separators.
- Desktop content is vertically balanced with substantial negative space.
- The hero fills most of the initial viewport, while allowing the next visual section to begin at its lower edge as shown in the reference.
- Screenshot text is reference content only; final Swaddeep copy will be supplied separately.

#### Explore control

- Reuse the established moving Explore graphic and down-arrow treatment already used on the About page.
- Use the existing ImageKit assets where appropriate:
  - `homepage/Explore.png` for the rotating circular text.
  - `homepage/Polygon.png` for the centre arrow.
- Position it across the transition from the hero to the changing-image section.
- It should communicate scrolling/jumping to the image section and must not rely on animation alone.

#### Changing-image section

- Display a sequence of real images, not gradient or text-only placeholder slides.
- Images change automatically after a short interval of a few seconds.
- The section is full width and begins immediately below the red hero.
- Images should fill the available visual area without distortion; exact crop/focal-point rules will be set after assets are provided.
- Transition type, exact interval, ordering, links, captions, controls, and pause behaviour remain pending.
- Reduced-motion users should receive a non-disorienting transition or static presentation.

### Reference 02 — Fixed header and client-logo marquee

Status: structural behaviour confirmed.

#### Fixed header

- Keep the complete site header fixed to the top edge while scrolling.
- The header has an opaque brand-red background rather than floating transparently over project imagery.
- It must remain above the hero, changing images, logo marquee, and all later page sections.
- Preserve the desktop arrangement shown in the references: logo on the left; “Let's talk” action and menu control on the right.
- Define an appropriately compact layout below `lg` while keeping all primary controls accessible.
- Account for browser safe areas and prevent the fixed header from hiding linked section targets.

#### Client-logo marquee

- Place a full-width client-logo strip immediately below the changing-image/project section.
- Use a white background with black or monochrome client logos.
- Logos move horizontally at a slow, steady speed.
- Movement loops infinitely and seamlessly, with no visible jump, empty gap, or pause when the sequence restarts.
- Maintain consistent visual weight across logos with different source proportions; do not force every logo to identical width.
- Give logos generous horizontal spacing and vertically centre them within the strip.
- The reference shows approximately five logos visible at once on a wide desktop, but the implementation should respond fluidly to viewport width.
- Use duplicated presentation tracks only as needed for the seamless visual loop; duplicated logos must not create redundant announcements for assistive technology.
- Logo motion is decorative rather than essential. Under `prefers-reduced-motion`, show a stationary, readable logo row/grid or substantially reduce movement.
- Final logo files, sequence, destinations, alternative text, marquee direction, and exact speed are pending client assets/confirmation.

### Reference 03 — Three-part value statement

Status: section structure and visual direction confirmed.

#### Placement and background

- Place this section immediately after the client-logo marquee.
- Use a clean white/off-white background with black typography and divider lines.
- The section should occupy a substantial portion of the desktop viewport and use generous empty space above, below, and around its content.

#### Desktop layout (`lg` and above)

- Present three equal visual columns in one horizontal row.
- Each column contains:
  - A small two-digit index above the heading: `01`, `02`, and `03`.
  - A large, uppercase, condensed heading below the index.
- Reproduce the reference's deliberate heading line breaks and strong left alignment when final copy length permits.
- Separate adjacent columns with tall, thin vertical rules.
- Add a short horizontal stroke through the vertical midpoint of each rule so each separator reads as a minimal plus/cross.
- Keep the divider crosses centred in the gaps between columns rather than attached to the text blocks.
- Match the reference's restrained monochrome treatment, oversized type, broad column spacing, and vertical centring as closely as practical.
- Implement all fixed measurements in `rem`, using fluid `clamp()` values with `rem` bounds where needed.

#### Reference wording

The screenshot currently shows:

1. `01 — INSPIRE / YOUR / AUDIENCE`
2. `02 — BE A / THOUGHT / LEADER`
3. `03 — SCALE / YOUR / IMPACT`

This wording is recorded as reference content. Final Swaddeep wording must be confirmed when the client supplies homepage content.

#### Responsive layout (below `lg`)

- Preserve the reading order `01`, `02`, `03`.
- At widths where three columns no longer fit comfortably, reflow into a stacked layout rather than compressing the display text until it becomes unreadable.
- Translate the desktop separators into horizontal separators/cross details between stacked items, or reposition them so they remain intentional and never overlap text.
- At `md`, a two-plus-one arrangement may be considered only if it looks balanced; otherwise use a single-column stack.
- Retain generous whitespace while reducing section padding and heading size appropriately for smaller screens.
- Preserve the supplied line breaks only when they fit; allow semantic wrapping where required to prevent clipping or overflow.
- Decorative divider strokes must be hidden from assistive technology.

### Reference 04 — Editorial text and line-art section

Status: approved as a reusable visual/content pattern; exact placement and content remain flexible.

#### Visual direction

- Use a spacious white/off-white section with black typography and fine black line artwork.
- Build the desktop composition as two primary columns:
  - A narrower left column for abstract geometric illustrations.
  - A wider right column for editorial headings and body copy.
- Each content row pairs one decorative line illustration with one text block.
- Maintain substantial vertical space between rows and generous outer page margins.
- Keep the overall treatment minimal, precise, and monochrome.

#### Line artwork

- The reference includes two useful original-art directions:
  - A fan/sunburst formed from thin lines radiating upward from one point on a horizontal baseline.
  - An irregular hand-drawn cross/star formed from paired horizontal and vertical strokes.
- Recreate these motifs with original CSS or project-owned SVG artwork; do not copy proprietary assets from the reference website.
- Strokes should remain thin and visually consistent across viewport sizes.
- Artwork is decorative and must be hidden from assistive technology.
- Subtle motion may be considered only if it supports the final interaction direction and respects `prefers-reduced-motion`; the static form is sufficient.

### Reference 05 — Sought-after identity capsule

Status: section structure and static artwork behaviour confirmed.

#### Placement and container

- Add this content section in the homepage sequence using the screenshot as the required visual reference.
- Use a white/off-white page background around one large black capsule-shaped panel.
- The panel has fully rounded left and right ends, generous internal spacing, and wide outer margins on desktop.
- Match the reference's strong black-and-white contrast and vertically centred composition.

#### Desktop composition (`lg` and above)

- Arrange the capsule contents horizontally in this order:
  1. A white starburst image near the left rounded end.
  2. A large condensed uppercase statement.
  3. A supporting list of four short principles.
  4. A second white starburst image near the right rounded end.
- The headline occupies the dominant central-left area and uses the configured condensed display font.
- Preserve deliberate line breaks in the headline when final copy permits.
- The supporting principles use bold lead words followed by regular-weight explanatory text on the same line.
- Keep both starbursts visually balanced and inset from the capsule's curved ends.

#### Starburst images

- There are two separate visible instances of the same starburst-style image: one on each side of the content.
- Reuse the existing project-owned starburst image already present on the About page where suitable (`homepage/White-Star.png`).
- On the About page this asset spins; in this homepage capsule section both instances must be fixed and must not rotate, pulse, or otherwise animate.
- Treat both instances as decorative and hide them from assistive technology.

#### Reference wording

The screenshot currently shows the heading `A SOUGHT-AFTER IDENTITY REQUIRES` and these four principles:

- `COURAGE to be contrarian`
- `CLARITY in messaging`
- `COMPRESSION of big ideas`
- `CONSISTENCY across touch points`

This wording is reference content until the final Swaddeep homepage copy is supplied.

#### Responsive composition (below `lg`)

- Increase the capsule height and stack the headline and principles when the horizontal composition no longer fits comfortably.
- Retain a strongly rounded container, adapting from a wide capsule to a tall rounded panel as necessary.
- Reposition the two static starbursts symmetrically so they frame the content without covering it; they may move to the top and bottom on small screens.
- Keep the principle lead words visually distinct and allow explanatory phrases to wrap naturally.
- Scale the headline with `clamp()` using `rem` bounds and prevent clipping at every viewport width.

### Reference 06 — Sticky services overview

Status: one continuous section and its desktop scroll behaviour are confirmed.

#### Important interpretation of the screenshots

- The supplied screenshots show different scroll positions within one tall services section; they must not be implemented as separate sections or slides.
- The left title and right service content share one parent section.
- The fixed site header remains visible above this entire interaction.

#### Background and structure

- Use a white/off-white background covered by a very subtle repeating pattern of pale plus signs.
- The patterned background spans the complete services section and scrolls with the section.
- Build a two-column desktop layout:
  - A wide left column containing the primary service title and supporting line.
  - A right column containing multiple vertically arranged service groups and their item lists.
- Use original CSS or project-owned SVG for the repeating plus pattern and decorative starbursts.

#### Sticky desktop behaviour (`lg` and above)

1. The large left content enters the viewport naturally with the services section.
2. Once it reaches its intended top position beneath the fixed header, the left content becomes sticky.
3. The left title remains stationary while the longer right column continues scrolling upward through its service groups.
4. Sticky positioning is constrained to the shared parent section; it must not remain fixed after the right-side content finishes.
5. At the end of the parent section, the sticky left content releases and the complete section scrolls upward/out of view together.

- Calculate the sticky top offset from the fixed header height plus the intended visual gap, so content is never hidden behind the header.
- The page must use normal document scrolling; do not create a separate scrollbar inside the right column.
- Avoid scroll-jacking, forced snapping, or JavaScript-driven pinning when native CSS sticky positioning can provide the required interaction.

#### Left column

- Use an extremely large condensed uppercase heading, shown in the reference as `BRAND STRATEGY & DESIGN`.
- Preserve the dramatic scale and deliberate line breaks without clipping the text.
- Place a smaller supporting line below it, shown as `Crafting the Institutional Identity`.
- Keep the title left-aligned with generous inset from the viewport edge.

#### Right column

- Display a vertical sequence of service groups, each introduced by a small decorative starburst and a large condensed uppercase group heading.
- Each group may include a short descriptive sentence followed by a list of related services.
- Separate list rows with thin horizontal rules.
- The screenshots show `BRAND BLUEPRINT` as one example group, with items such as Narrative, Positioning, and Purpose & Values; additional groups continue below it.
- Right-side text is reference content until final Swaddeep services and descriptions are supplied.

#### Responsive behaviour (below `lg`)

- Disable the long desktop sticky interaction when the two columns can no longer coexist comfortably.
- Present the left title first, followed by all service groups in normal document order.
- Keep the patterned background, typography hierarchy, starbursts, and ruled lists while scaling them appropriately.
- Do not create excessive empty space or force mobile users to scroll past a pinned oversized title.
- If sticky behaviour is retained at any intermediate width, verify that the content remains fully visible below the fixed header and does not trap scrolling.

### Reference 07 — Split studio-introduction CTA

Status: approved section pattern; final copy and destination are pending.

#### Structure and desktop composition (`lg` and above)

- Use a spacious white/off-white section with two asymmetrical columns.
- The left column occupies the larger share and contains an oversized brush/script statement across two deliberate lines.
- The right column contains two short body paragraphs followed by a rounded-outline CTA button.
- Vertically centre the left statement and right content block relative to one another.
- Preserve broad outer margins and substantial whitespace above and below the content.
- Use the configured Amithen font for the expressive statement and Work Sans for the copy and action.
- Keep body-copy line length comfortably readable rather than stretching it across the available column.

#### Reference content

- Display statement: `From ideas / to inspiration`
- Supporting copy describes the studio's expertise-led service-brand focus and experience across sectors.
- CTA label: `Know more`

All wording remains reference content until final Swaddeep copy is provided.

#### CTA treatment

- Use a thin black rounded outline, white background, black label, and comfortable horizontal padding.
- Provide clear hover, keyboard-focus, and active states without changing the restrained visual language.
- The complete control must be a semantic link or button based on its final destination.

#### Responsive behaviour (below `lg`)

- Stack the expressive statement above the body copy and CTA.
- Scale the script text with `clamp()` using `rem` bounds and prevent letterforms from clipping at the viewport edges.
- Preserve readable paragraph width and adequate space between the copy and action.

### Reference 08 — Oversized typographic footer

Status: footer visual direction confirmed; Swaddeep content is pending.

#### Main footer field

- Use a full-width brand-red footer with white content.
- Make an oversized two-line wordmark the dominant visual element, with a large plus symbol aligned to the right of the upper line.
- Recreate this treatment using Swaddeep branding and original typography/layout; the reference brand name must not appear in the finished site.
- Include a compact vertical navigation list in the open space beside/below the oversized wordmark.
- Maintain the reference's poster-like scale, asymmetric balance, and generous breathing room.

#### Footer utility row

- Separate the lower utility area from the main footer using a thin, low-contrast horizontal rule.
- Provide structured groups for:
  - Contact label, email address, and phone number.
  - Social-media links/icons.
  - Copyright information.
  - Development/credit link if required by the client.
- Use smaller, lower-emphasis typography in this row while maintaining accessible contrast.
- Social links need accessible names and must not depend on icons alone for assistive technology.
- Email and phone values should use functional `mailto:` and `tel:` links.

#### Responsive behaviour (below `lg`)

- Scale and reflow the oversized wordmark without horizontal clipping.
- Stack navigation and utility groups into a clear reading order with generous touch spacing.
- Allow the utility row to wrap into multiple rows or a single column rather than compressing contact and legal text.
- Keep the large plus symbol visually connected to the wordmark without allowing it to obscure navigation.

#### Typography and content

- Each text block contains a prominent sentence-style heading followed by a supporting paragraph.
- Use the configured Work Sans or the final approved body family for this editorial treatment.
- Headings are substantially larger and heavier than paragraphs but are not condensed display headings.
- Body copy uses a comfortable line height and a controlled reading width.
- Screenshot wording is reference material only. Final headings and paragraphs will come from Swaddeep content.

#### Responsive behaviour

- Below `lg`, reduce the wide desktop gap while preserving the distinction between artwork and text.
- At smaller widths, stack each illustration with its associated text block in semantic reading order.
- Scale artwork using `rem`-based dimensions or fluid `clamp()` bounds so it remains visible without dominating the copy.
- Prevent long headings and paragraphs from clipping; allow natural wrapping and maintain a readable line length.
- Preserve generous whitespace, but reduce vertical spacing proportionally on compact screens.

#### Usage guidance

- This pattern may be used for brand challenges, process explanations, institutional-identity messaging, or similar long-form homepage content.
- It can follow the three-part value statement if the final homepage content supports that narrative order.
- Exact number of rows should be determined by the supplied content rather than fixed to the two rows visible in this screenshot.

### Reference 09 — Layered About-page hero

Status: visual hierarchy and asset behaviour confirmed.

- Use a full-width brand-red hero beneath the fixed red header, creating one continuous colour field.
- Combine a very large condensed uppercase first line with a still larger brush/script second line.
- Let the script line span most of the viewport width while preventing clipping.
- Place the rotating Explore/down-arrow control in open space toward the upper-right of the hero content.
- Place a rotating white starburst beside a short supporting statement near the lower-right.
- The Explore and starburst assets rotate slowly in this About hero; this is intentionally different from the two static starbursts in Reference 05.
- Keep the supporting statement narrow and readable while the typography remains the dominant element.
- On smaller screens, reflow supporting content below the headline and reposition decorative assets so they do not overlap text.

### Reference 10 — Bordered client-logo grid

Status: approved credibility-section pattern.

- Introduce the section with a large centred condensed uppercase heading and a smaller uppercase eyebrow/subheading beneath it.
- Follow the heading with a full-width bordered grid of client logos.
- Desktop reference uses five equal-width cells per row; exact column count should respond to the available width.
- Use thin, light-grey outer and internal rules.
- Centre each logo in its cell with generous padding and normalize perceived visual weight without distorting source proportions.
- Logos may retain subtle grayscale tonal differences; ensure all remain legible against the white background.
- Use semantic image alternative text and avoid redundant announcements if adjacent text already names a brand.
- Below `lg`, reduce the grid to fewer columns; use two columns or one single-column cells on narrow screens.
- This static logo-grid pattern is distinct from the moving homepage logo marquee and may be used where a complete client roster is appropriate.

### Reference 11 — Centred conversion CTA with plus pattern

Status: approved campaign/conversion pattern.

- Use an introductory statement centred within a controlled reading width on a white background.
- Frame that statement with one large thin-line plus symbol on each side at desktop widths.
- Below it, transition into the subtle repeating pale-plus background established in Reference 06.
- Centre a large condensed uppercase CTA heading, a short supporting sentence, and a black pill-shaped action button.
- Maintain generous vertical separation between the introductory statement and conversion block.
- Decorative plus symbols and the repeating pattern must be hidden from assistive technology.
- On smaller screens, stack or omit the flanking plus symbols, scale the CTA heading safely, and keep the action comfortably tappable.

### Reference 12 — Split registration/form section

Status: approved form-layout pattern; fields depend on the final campaign.

- Use a spacious white two-column desktop section.
- Left column:
  - Small widely tracked uppercase eyebrow.
  - Oversized multi-line brush/script campaign title.
  - Supporting event/session description in larger body text.
- Right column:
  - Compact, aligned form with first and last name fields sharing a row.
  - Full-width email field.
  - Labelled select fields.
  - Black pill-shaped submit button.
- Use minimal form styling: transparent/white backgrounds, thin black underlines for text fields, and thin rectangular borders for selects.
- Every control requires a persistent visible label; required state, errors, instructions, and success feedback must be accessible and must not rely on an asterisk or colour alone.
- Use correct input types, autocomplete attributes, keyboard operation, visible focus states, and sufficient touch-target sizes.
- Prevent duplicate submission and communicate loading, success, and failure states.
- Below `lg`, stack the campaign introduction above the form and make paired name fields single-column on narrow screens.
- Final fields, validation, submission destination, privacy consent, anti-spam approach, and success behaviour remain pending.

### Large-screen composition (`lg` and above)

- Preserve the reference's asymmetric desktop layout, oversized headline, right-side copy block, central decorative cross, and overlapping Explore control.
- Size and spacing should be authored in `rem` (including `clamp()` bounds where fluid sizing is needed).
- The layout should remain visually consistent across screens above `lg`, without depending on one screenshot's exact pixel dimensions.

### Responsive composition (below `lg`)

- Reflow the hero content into a clear mobile/tablet reading order.
- Scale display text carefully to avoid clipping or overflow.
- Reposition or simplify the decorative cross without allowing it to obscure content.
- Keep supporting copy and sector links readable, with natural wrapping and adequate touch spacing.
- Keep the Explore control visible at the hero/image boundary without covering important text.
- Keep the fixed header usable without allowing the logo, contact action, and menu control to collide.
- Reduce marquee logo size and spacing appropriately while retaining a continuous presentation; do not make logos illegibly small.
- Stack the three-part value statement below `lg` when its desktop columns cannot retain the intended scale and spacing.
- Reflow the black identity capsule vertically below `lg`, keeping both starburst images static and decorative.
- Convert the sticky services overview to a normal single-column flow below `lg` unless testing confirms sufficient space for a usable two-column treatment.
- Stack the split studio-introduction CTA and preserve the expressive script/body-copy hierarchy.
- Reflow the footer wordmark, navigation, contact, social, and legal groups without clipping or crowding.
- Define distinct refinements for `md` and smaller viewports during implementation after mobile/tablet references are supplied.

## Existing project elements relevant to this reference

- Global font variables and brand colours are already defined in `src/app/globals.css`.
- The homepage currently contains an early hero structure in `src/app/page.tsx`.
- `src/components/hero-slider.tsx` currently implements timed placeholder slides; these must later be replaced by the supplied image sequence.
- The About page already uses the requested rotating Explore image and centre-arrow assets.

## Content and assets still required

- Final homepage headline and supporting copy.
- Final sector names and destination links.
- Slider/project images in intended display order.
- Image alt text, project names, and optional destinations/captions.
- Client-logo artwork in a suitable transparent format, its intended order, names/alt text, and any destination links.
- Desired slide interval and transition style, if different from the existing timing.
- Desired logo-marquee direction and speed, if the visual reference is not sufficient.
- Mobile and tablet reference screenshots.
- Confirmation of header/menu behaviour and “Let's talk” destination.
- Final wording for the three numbered value statements.
- Final editorial headings/body copy and confirmation of where the line-art pattern should appear.
- Final headline and four principle statements for the black identity capsule.
- Final services-section title, service groups, descriptions, list items, and their ordering.
- Final introduction CTA statement, body copy, label, and destination.
- Final Swaddeep footer wordmark treatment, navigation links, contact details, social profiles, copyright text, and optional development credit.
- Final About-hero headline and supporting statement.
- Final static client-logo grid assets and ordering.
- Final campaign CTA copy, action label, and destination.
- Final registration-form fields, validation rules, submission integration, consent copy, and success/error messaging.

## Open decisions

- Exact hero height at desktop, tablet, and mobile sizes.
- Whether slider visitors can manually navigate, pause, or swipe.
- Whether each image links to a project detail page.
- Whether the slide sequence loops indefinitely.
- Whether the Explore control scrolls smoothly to the first image or performs another action.

## Reference log

| Reference | Area | Date received | Notes |
| --- | --- | --- | --- |
| 01 | Homepage hero and first changing image | Current review | Red hero, asymmetric copy, overlapping rotating Explore/down-arrow control, and automatic multi-image section. |
| 02 | Fixed header, changing image, and logo marquee | Current review | Opaque red header remains fixed at top; white client-logo strip follows the image and moves slowly in a seamless infinite loop. |
| 03 | Three-part value statement | Current review | Spacious white section after the marquee with three numbered condensed headings and cross-shaped column separators. |
| 04 | Editorial text and line art | Current review | Approved reusable two-column pattern pairing original abstract line motifs with large headings and supporting paragraphs. |
| 05 | Sought-after identity capsule | Current review | Large black rounded panel with condensed headline, four principles, and two static copies of the About-page starburst asset. |
| 06 | Sticky services overview | Current review | One tall patterned section: oversized left title sticks below the fixed header while right-side service groups scroll, then the entire section exits together. |
| 07 | Split studio-introduction CTA | Current review | Oversized two-line script statement on the left with paragraphs and an outlined CTA on the right. |
| 08 | Oversized typographic footer | Current review | Red poster-like footer with dominant wordmark, navigation, contact/social links, and a separated utility row. |
| 09 | Layered About-page hero | Current review | Red hero mixing condensed and script display type, rotating Explore control, rotating starburst, and a lower-right statement. |
| 10 | Bordered client-logo grid | Current review | Centred section heading followed by a responsive, lightly ruled grid of proportionally normalized client logos. |
| 11 | Centred conversion CTA | Current review | Intro copy framed by thin pluses, followed by a patterned CTA field with condensed heading and black pill action. |
| 12 | Split registration form | Current review | Script-led campaign introduction beside a minimal accessible registration form with underlined fields and bordered selects. |
