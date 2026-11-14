# OY Accessories Store

A no-build static storefront starter (HTML/CSS/JavaScript) designed for GitHub + Netlify + Supabase.

## Current starter features
- Responsive luxury black / ivory / champagne-gold storefront
- Category filters and sample products
- Shopping cart persisted in LocalStorage
- Customer checkout form
- WhatsApp order message handoff
- Optional Supabase client connection placeholder

## Before launch
1. Replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_PUBLISHABLE_KEY` in `index.html`.
2. Replace `212XXXXXXXXX` with the store WhatsApp number (international format, no plus sign).
3. Create the `orders` and `order_items` tables and policies in Supabase before enabling database checkout.
4. Do not put Supabase secret/service-role keys in this file.
5. Connect this GitHub repository to Netlify and publish from the repository root.

This is a starter storefront. Admin authentication, product CRUD, stock management, secure order processing and automatic WhatsApp Business API notifications are subsequent implementation steps.
