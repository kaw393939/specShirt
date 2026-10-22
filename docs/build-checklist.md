# 3. Agree on the checklist

<DocReview id="CHECKLIST" />

This is our definition of “it works.” We’ll use these checks when building and reviewing the store.

**These checks are proposed. Nothing in the storefront has been built or tested yet.**

## Choose a shirt {#cart-01}

Reference: **CART-01**

- [ ] A visitor can choose a size and a whole-number quantity of at least one.
- [ ] Adding without a size shows a helpful message and leaves the bag unchanged.
- [ ] Adding size M, quantity 2, puts two medium shirts in the bag.
- [ ] Adding another medium shirt increases that quantity to three.

## Update the bag {#cart-02}

Reference: **CART-02**

- [ ] Visitors can change quantities and remove shirts.
- [ ] The total updates when the bag changes.
- [ ] Refreshing normally keeps the bag. We’ll use localStorage, which saves small amounts of data in the visitor’s browser.
- [ ] An empty bag shows a link back to the shirt.
- [ ] If saving is unavailable or saved data is damaged, the page still works and explains when the bag cannot be saved.

## Try demo checkout {#checkout-01}

Reference: **CHECKOUT-01**

- [ ] Checkout clearly says it is a demo and uses fictional sample details.
- [ ] It never asks for a credit card, sends personal details, or takes payment.
- [ ] Visitors cannot check out with an empty bag.
- [ ] Confirmation shows the correct items and a clearly labeled pretend order number.
- [ ] Clicking twice does not create duplicate demo orders.

## Make public pages easy to find {#seo-01}

Reference: **SEO-01**

- [ ] Each public page has a useful title, description, and links.
- [ ] Important text is in the built HTML, so it is available before JavaScript runs.
- [ ] Shared links have a suitable preview.
- [ ] A sitemap lists public pages; bag and checkout pages ask search engines not to index them.
- [ ] Reviews, prices, and product claims are accurate or clearly marked as examples.

## Make the site usable {#a11y-01}

Reference: **A11Y-01**

- [ ] A visitor can complete the shopping flow using only a keyboard and see which control is selected.
- [ ] Inputs have labels, and errors explain how to fix the problem.
- [ ] A screen reader can announce bag updates.
- [ ] Text and controls remain usable on a phone and when zoomed in.
- [ ] Text has sufficient contrast and motion respects reduced-motion preferences.

## Connect the plan to the code

The reference names above are labels, so we can point to the same feature in a discussion, code change, and test. You don’t need to memorize them.

| Feature | Plan discussion | Build issue / code change | Result |
| --- | --- | --- | --- |
| CART-01: choose a shirt | [Issue #6](https://github.com/kaw393939/specShirt/issues/6) | Not started | Not tested |
| CART-02: update the bag | [Issue #6](https://github.com/kaw393939/specShirt/issues/6) | Not started | Not tested |
| CHECKOUT-01: demo checkout | [Issue #6](https://github.com/kaw393939/specShirt/issues/6) | Not started | Not tested |
| SEO-01: public pages | [Issue #6](https://github.com/kaw393939/specShirt/issues/6) | Not started | Not tested |
| A11Y-01: usability | [Issue #6](https://github.com/kaw393939/specShirt/issues/6) | Not started | Not tested |

When we build a feature, we’ll add links to its issue and pull request here and record what we checked. A pull request links to the changed code.

## What still needs a decision?

We need to choose the sizes, sample price, quantity limit, any pretend shipping costs, and what happens when someone refreshes the confirmation page. Discuss these in the linked issue before building checkout.

[Read how we work together →](./working-together)
