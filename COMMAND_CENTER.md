# Command Center

Purpose: Safe CLI handoff file for AI-assisted repo operations.

## Rules
- Never paste real API keys, tokens, passwords, secrets, or .env contents.
- Use .env.example for variable names only.
- Real secrets stay in local .env files.
- AI provides one command at a time.
- User runs command and pastes output into chat or COMMAND_OUTPUT.md.

## Active CLI Context
Working repo:
TODO

Current goal:
TODO

Safe commands allowed:
- ls
- pwd
- git status
- git log --oneline -5
- find with limited depth
- cat non-secret files
- npm install/build/test
- python scripts that do not print secrets

Blocked commands unless explicitly approved:
- rm -rf
- printing .env
- cat env.txt
- cat .env
- git add .env
- uploading secrets
- exposing tokens

## Secret File Policy
Files like env.txt, .env, csw.txt, env-manus.txt, and git-hub_vercel.txt may contain secrets.
Do not paste their contents into chat.
Only list variable names after redacting values.

## Command Output
Paste latest terminal output below this line.

