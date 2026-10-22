# Functional requirements

<DocReview id="FUNCTIONAL" />

## Requirement conventions
IDs are permanent. Requirements below are draft proposals until approved. Track implementation separately in the traceability index.

## CART-01 — Add a selected shirt {#cart-01}
A visitor selects a size and positive whole-number quantity before adding a shirt. Missing or invalid selections produce an accessible inline error and do not change the bag. Adding the same size merges quantities.

Acceptance: invalid additions leave the bag unchanged; size M × 2 appears accurately; a second M × 1 produces M × 3; controls work by keyboard.

## CART-02 — Persist and edit the bag {#cart-02}
Valid bag contents persist after refresh. Visitors can change quantity and remove items. Malformed saved data resets safely; unavailable browser storage leaves an in-memory bag usable with an explanatory notice.

Acceptance: refresh preserves valid contents; edits update totals; removing the last item shows the empty state; denied storage and invalid JSON do not crash the page.

## CHECKOUT-01 — Complete a simulated order {#checkout-01}
The checkout clearly states that it is a demonstration. Use fictional sample information. Do not request card details, transmit personal information, or initiate payment. Valid confirmation shows a demo reference and order summary. Submission requires a nonempty bag; prevent accidental duplicate confirmation.

Acceptance: empty-bag checkout is blocked; fictional sample data completes the flow; the summary matches the bag; the order is visibly marked as simulated; no checkout network request occurs.

## SEO-01 — Discoverable content {#seo-01}
Public editorial and product pages contain meaningful initial HTML, unique titles and descriptions, crawlable navigation, and suitable social preview metadata. A sitemap includes public content only. Demo transaction pages use noindex.

Acceptance: inspect built HTML and metadata; follow internal links; verify sitemap URLs match deployment paths. No misleading purchase offers or fabricated rating markup.

## A11Y-01 — Accessible shopping {#a11y-01}
The full shopping flow supports keyboard operation, visible focus, labeled controls, understandable error messages, and announcements of cart updates. Layouts support mobile use, zoom, and reduced motion.

Acceptance: complete the flow using only a keyboard and review labels, focus order, errors, and announcements with assistive technology.

## Review questions
Confirm size range, quantity limits, price, fictional shipping rules, totals, and confirmation persistence before implementation.
