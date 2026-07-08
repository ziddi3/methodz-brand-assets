# API Freeze Notice

## Methodz Brand Asset API v1

Status: Production Ready  
Version: 1.0.0  
Frozen API Path: api/v1/

## Rule

Do not make breaking changes to api/v1/.

Future changes must preserve existing paths, keys, endpoint files, and schema behavior.

## Protected Files

The following files are considered stable public API files:

- api/v1/manifest.json
- api/v1/schema.json
- api/v1/status.json
- api/v1/search.js
- api/v1/fetch-example.js
- api/v1/assets/

## What Counts As Breaking

Do not:

- Rename existing asset keys
- Move existing endpoint paths
- Delete existing endpoint files
- Change existing asset IDs
- Remove existing metadata fields
- Change api/v1/schema.json in a way that invalidates existing consumers
- Replace approved production assets without documenting the change

## Safe Changes

Allowed:

- Add new assets
- Add new metadata fields
- Add new endpoint files
- Add documentation
- Add api/v2/ for breaking changes

## Versioning Policy

api/v1/ is frozen for compatibility.

Breaking changes belong in:

api/v2/

## Future Me Reminder

If you are tempted to overwrite v1 because it feels messy, do not.

Create v2 instead.

v1 is a contract, not a scratchpad.
