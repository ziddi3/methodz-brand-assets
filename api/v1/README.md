# Methodz Brand Assets API v1

Stable machine-readable entrypoint:

api/v1/manifest.json

Use this path for websites, apps, deployment scripts, and AI agents that need approved Methodz brand assets.

Versioning rule:
- api/v1/ stays stable.
- Breaking changes should go into api/v2/.
- Root manifest.json can evolve, but api/v1/manifest.json should remain dependable.

## Methodz Seal Endpoints

Additional Methodz seal endpoints:

- api/v1/assets/methodz/gold-trust-seal.json
- api/v1/assets/methodz/red-wax-seal.json
- api/v1/assets/methodz/orange-wax-seal.json
- api/v1/assets/methodz/brand-seal-collection.json

These endpoints expose metadata and raw image URLs for approved Methodz seal variants.
