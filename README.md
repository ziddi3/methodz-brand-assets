# Methodz Brand Assets

Official Brand Asset Registry and API for the Methodz Ecosystem.

The methodz-brand-assets repository is the single source of truth for approved logos, trust marks, partner seals, icons, branding assets, and machine-readable metadata used across the Methodz ecosystem.

Rather than treating branding as static image files, this repository exposes assets through a versioned API structure that websites, applications, deployment pipelines, AI agents, and automation tools can consume consistently.

## Repository Layout

methodz-brand-assets/
- README.md
- manifest.json
- api/v1/
- logos/

## Main Asset Folders

logos/canadian-soft-water/
- simple-icon.png
- dark-brand-logo.png

logos/methodz/
- main-logo.png
- main-logo-transparent.png
- trust-icon.png
- stamp-of-approval.png
- gold-trust-seal.png
- red-wax-seal.png
- orange-wax-seal.png
- brand-seal-collection.png

logos/method-hvac/
- main-logo.png
- chain-logo.png
- franco-logo.png
- franco-horizontal.png
- franco-vertical.png
- partnership.png

logos/method-media/
- official-seal.png

logos/misc/
- bob-gemini-icon.png
- methodz-main.jpg

## Brand Asset API

Stable entrypoint:
    
    api/v1/manifest.json
    
The API manifest describes every approved asset with metadata such as id, name, path, endpoint, type, category, approval status, version, background compatibility, transparency, and tags.

## Schema

api/v1/schema.json

This schema defines the manifest structure so future websites, tools, and AI agents can validate the asset registry automatically.

## Search Helper

api/v1/search.js

Provides helper functions for loading the manifest, retrieving a single asset, and searching assets by company, category, or tags.

## Fetch Example

api/v1/fetch-example.js

Demonstrates how a website or app can load the manifest and resolve an approved raw asset URL.

## Asset Endpoints

Every major asset has its own endpoint file.

Examples:
    - api/v1/assets/methodz/trust-icon.json
    - api/v1/assets/methodz/stamp-of-approval.json
    - api/v1/assets/methodz/gold-trust-seal.json
    - api/v1/assets/methodz/red-wax-seal.json
    - api/v1/assets/methodz/orange-wax-seal.json
    - api/v1/assets/methodz/brand-seal-collection.json
    - api/v1/assets/canadian-soft-water/icon.json
    - api/v1/assets/method-hvac/main-logo.json
    
Each endpoint returns metadata plus the raw GitHub asset URL.

## Versioning Policy

api/v1/ is stable.

Breaking changes should be introduced in api/v2/ instead of changing v1 behavior.

The root manifest.json may evolve, but api/v1/manifest.json should remain dependable for integrations.

## Naming Rules

Use lowercase names with hyphens.

Good:
    - trust-icon.png
    - stamp-of-approval.png
    - main-logo.png
    
Avoid:
    - IMG_1234.png
    - file_000000.png
    - final-final-logo-v2.png
    
## Approval Rules

Only approved brand assets belong in this repository.

Concept art should stay outside the production folders until approved.

Deprecated assets should move into an archive folder rather than being deleted.

## Intended Consumers

This repository is designed for:
    - websites
    - apps
    - AI agents
    - automation scripts
    - deployment pipelines
    - GitHub Actions
    - future CDN services
    
## Future Roadmap

Planned improvements:
    - GitHub Pages support
    - REST-style wrappers
    - checksums
    - dimensions
    - theme-aware asset selection
    - SVG exports
    - WebP exports
    - favicon packs
    - npm package
    - Python package
    - AI SDK integration
    
## License

Assets remain the intellectual property of their respective Methodz companies.

This repository is the canonical distribution point for approved branding.

## API Freeze Notice

Methodz Brand Asset API v1 is production ready and frozen for compatibility.

Do not make breaking changes to api/v1/.

See:

API_FREEZE.md

Breaking changes should be introduced in api/v2/.
