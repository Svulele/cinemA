# Nu Metro Redesign — Build Brief for Coding Agent

Read this in full before writing code. It describes what to build, the
stack to use, and — importantly — what's real vs. mocked in the reference
concept, so nothing fake ends up shipped as if it were live data.

## 1. What this is

A redesign of the Nu Metro cinema website (numetro.co.za), built as a
working concept first, now moving to a real Next.js implementation.
A live, interactive HTML/CSS/JS reference is provided — treat it as the
source of truth for visuals, layout, copy tone, and interaction behavior,
not for architecture or data handling.

## 2. Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS — use `tailwind.config.js` in this handoff as
  the starting theme (colors, fonts, radii, glass shadows already extracted
  from the reference file).
- **Fonts:** Bodoni Moda (display/serif, headings) + Hanken Grotesk (UI,
  body/buttons). Load via `next/font/google`.
- **State:** local component state is fine for filters/selection; anything
  touching real seat/session data should go through a proper data-fetching
  layer (see §5), not client-only state.

## 3. Pages / routes to build

- `/` — homepage: hero carousel, "Choose an experience" disclosure, day
  filter, film grid ("Now booking"), "Coming soon" row, footer.
- `/cinemas` — cinema picker (currently a dialog/sheet in the concept; can
  stay a modal or become its own route — agent's call, keep the same
  search-to-select interaction).
- `/movies/[slug]` — a film detail page is NOT in the reference concept
  but is a reasonable addition; the reference only has showtime chips
  inline on the film card. Decide with the user whether to add this before
  building it.
- Booking flow (seat selection → summary) — currently a dialog/sheet.
  Whether this becomes a route or stays a modal depends on how the real
  booking API structures a session (see §5).

## 4. Components to extract from the reference file

Map these 1:1 to React components:

- `Header` — brand mark, nav, cinema button, search button, theme toggle
- `HeroCarousel` — film slides, prev/next arrows, dot indicators
- `ExperienceDisclosure` — collapsible "Choose an experience" section with
  5 cards (Standard, VIP, Xtreme, 4DX, ScreenX)
- `DayFilter` — horizontal day chips
- `FilmGrid` / `FilmCard` — poster art, age badge, title, pills, showtime
  chips (2-column on mobile, auto-fill grid on desktop)
- `ComingSoonRow` — horizontal scroll-snap tile row
- `CinemaPickerDialog` — searchable cinema list
- `SearchDialog` — live-filtered film search
- `BookingDialog` — seat map + ticket-stub summary
- `Footer`

Each `.glass` element in the reference (header, filter bars, cards,
dialogs) shares one visual recipe — see the comment block at the bottom of
`tailwind.config.js`. Build a shared `Glass` wrapper component or a
`glass` Tailwind utility class rather than repeating the shadow/blur
classes on every element.

## 5. What's mocked in the reference — do not ship as-is

This is the important part. The reference concept fakes several things to
be demo-able without a backend:

- **Film data** (`FILMS` array) — titles, synopses, genres, durations,
  ages, formats, showtimes are all placeholder. Replace with real film and
  showtime data from Nu Metro's catalog/booking system.
- **Seat availability** (`rng()` seeded-random function in the booking
  dialog) — seats are randomly marked taken/available per film+time+day,
  purely for visual demo. This must be replaced with real seat-map data
  from a live booking session — never ship randomly-generated "taken"
  seats.
- **Pricing** (`PRICES` object) — flat placeholder prices per experience
  type. Replace with real pricing from Nu Metro's system (which likely
  varies by cinema, day, and time, not just experience type).
- **"Few seats left" indicator** (`few()` function) — currently a hash-based
  fake signal. Should be driven by real remaining-seat counts.
- **Payment button** — currently shows a "not connected" message on click.
  Needs real checkout integration once a payment provider/API is decided
  (see the pitch doc: reuse Nu Metro's existing booking/payment system if
  possible, rather than standing up a new one).
- **Poster art** — hand-drawn inline SVGs standing in for real movie
  posters. Replace with actual poster images (with proper alt text) once
  real film data is wired in.
- **Cinema list** — the list of 19 cinema names is representative, not
  verified against Nu Metro's actual current cinema locations.

## 6. Data layer

Before building the film grid or booking flow for real, get clarity (from
the user, not by guessing) on:

- Is there an existing Nu Metro booking API to call, or does one need to
  be stood up?
- How are film, showtime, and seat availability data structured/queried?
- What payment provider is in scope (Stripe, PayFast, or an existing Nu
  Metro integration)?

Do not invent endpoints or a backend schema without this — stub the data
layer behind a typed interface (e.g. `getFilms()`, `getShowtimes()`,
`getSeatMap()`) so the UI can be built against mock data now and pointed at
a real API later without a rewrite.

## 7. Accessibility notes carried over from the reference

- All interactive elements have `aria-pressed` / `aria-expanded` /
  `aria-label` states — preserve these in the React version.
- Respect `prefers-reduced-motion` for the carousel and disclosure
  animations.
- Seat buttons must be reachable and operable by keyboard, with taken
  seats marked `disabled` and announced as such.

## 8. Out of scope for this brief

- Real payment processing implementation details
- Nu Metro's actual brand assets/logos (the reference uses an original
  monogram mark, not Nu Metro's real logo, for IP reasons — confirm with
  Nu Metro what's usable if this moves from pitch to real build)
- Backend/API architecture (depends on answers in §6)
