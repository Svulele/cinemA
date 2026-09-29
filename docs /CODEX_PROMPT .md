# First prompt for Codex (paste this)

Read docs/BUILD_BRIEF.md and open docs/numetro-redesign.html in a browser as the
visual reference. Then:

1. Scaffold nothing new if a Next.js + TypeScript + Tailwind app already exists;
   otherwise run create-next-app (App Router, src dir, TypeScript, Tailwind).
2. Merge tailwind.config.js into the project theme and load Bodoni Moda and
   Hanken Grotesk with next/font/google.
3. Build, in this order, checking each against the reference before moving on:
   Header -> HeroCarousel -> ExperienceDisclosure -> DayFilter -> FilmGrid/FilmCard
   -> ComingSoonRow -> Footer -> CinemaPickerDialog -> SearchDialog.
4. Use a typed mock data layer (getFilms, getShowtimes, getSeatMap). No real API,
   no payment integration, no /movies/[slug] pages in this pass.
5. Build BookingDialog last, against mock data, with the payment button as a
   clearly-labelled placeholder.

## Design intent (do not lose these)
- Rounded everywhere (pills, 24-40px radii), liquid-glass surfaces, classic serif
  headings (Bodoni Moda) with a clean grotesque for UI.
- Light "foyer" theme and dark "auditorium" theme; every text/background pair
  must stay readable in BOTH. Check contrast of hero title, pills, nav, and
  buttons in dark mode specifically.
- Hero carousel arrows sit in a row with the dots BELOW the hero, never over the
  synopsis text.
- Mobile: film grid is 2 columns with compact cards.

## Known polish items to improve on the reference
- Dark theme hero feels empty on the left; add depth (spotlight, subtle grain).
- Poster art is placeholder SVG; structure FilmCard to accept real poster images.
- Experience marks are original placeholders, not Nu Metro's real logos.
