# Pages and shopping flow

<DocReview id="UX" />

## Proposed sitemap
- Home: promise, stories, product introduction.
- The Shirt: gallery, fit, materials, care, size selection.
- Our Story: purpose and people.
- Lookbook: the same shirt in different lives or settings.
- Guides: useful editorial pages.
- Bag → Demo checkout → Demo confirmation.

## Shopping flow
Read product details → select size and quantity → add to bag → review or edit bag → enter demo checkout → confirm simulated order.

## States to specify before implementation
Product: no size selected, valid selection, invalid quantity. Bag: empty, populated, updated, removed. Storage: available, unavailable, malformed. Checkout: incomplete, valid, confirmed. Confirmation: reload and direct access without an order.

## Interaction requirements proposal
Every action works with a keyboard. Validation identifies the problem beside the relevant input. Cart changes are announced to assistive technology. Dialogs, if used, have clear focus behavior. Mobile layouts preserve access to product details and the cart.

## Review questions
Should the bag use a page or drawer? What fictional shipping choices and checkout fields serve the demo? What should happen after a confirmed demo order?
