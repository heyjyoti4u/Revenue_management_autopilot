# Reference Route and Sub-navigation Notes

The reference homepage uses five top-level navigation items: For STRs, For Hotels, Customers, Resources, and Book a call. The hidden navigation DOM revealed these route groups.

## STR routes
- `/str/ota-optimization` — OTA optimization
- `/str/airbnb-optimization` — Airbnb optimization
- `/str/booking-com-optimization` — Booking.com optimization
- `/str/vrbo-optimization` — Vrbo optimization
- `/str/ranking-intelligence` — Ranking intelligence
- `/str/revenue-management` — Revenue management
- `/str/dynamic-pricing` — Dynamic pricing
- `/str/seasonal-pricing` — Seasonal pricing
- `/str/gap-night-pricing` — Gap night pricing
- `/str/minimum-stay-strategies` — Minimum-stay strategies
- `/str/comp-set-analysis` — Comp-set analysis
- `/str/revenue-health-check` — STR Portfolio Health Check
- `/str/revenue-leak-calculator` — STR ROI Calculator
- External audit tool route is exposed from the nav but should be represented as an internal SignalStay audit page for this build.

## Hotel routes
- `/hotel/ota-optimization` — OTA ranking optimization
- `/hotel/revenue-management` — Revenue management

## Resource routes
- `/blog` — Blog
- `/guides` — Guides
- `/webinars` — Webinars

## Company routes
- `/about-us` — About SignalStay
- `/partners` — Partners & Integrations
- `/referral-program` — Referral program
- `/press-and-media` — Press
- `/careers` — Careers

## Customer and conversion routes
- `/case-studies` — Customers / case studies
- `/book-a-call-with-our-experts` — Book a call

## Implementation decision
Build a shared SignalStay shell with a dark header, active route state, and desktop mega-menu / mobile accordion sub-navigation. Create meaningful pages for the highest-value routes: `/str`, `/str/revenue-management`, `/str/ota-optimization`, `/str/revenue-health-check`, `/hotel`, `/hotel/revenue-management`, `/hotel/ota-optimization`, `/case-studies`, `/resources`, `/about-us`, `/partners`, `/contact`, and `/book-a-call-with-our-experts`. Other discovered routes should resolve through a reusable detail-page template rather than 404.
