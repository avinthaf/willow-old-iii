# Willow — Website Sales Agent

This project is about finding local businesses in Cleveland, OH and the Greater Cleveland Area that need a new or upgraded website, for cold email outreach.

## Finding businesses

When the user asks to find businesses — "find me plumbers", "hunt for auto shops", "go find prospects" — delegate to the `lead-hunter` subagent. It handles the full research loop: browsing directories, checking websites, scoring candidates, and writing the CSV.

Results land in `leads/candidates_<YYYYMMDD>.md`.

## Researching a lead

When the user asks to research, profile, or scout a specific business before building — "research Neo Plumbing", "scout Euclid City Plumbing", "gather info on this lead" — delegate to the `scout` subagent.

Scout findings land in `prototypes/<business-slug>/scout/`.

## Building prototypes

When the user asks to build, develop, scaffold, or prototype a website for a specific business — "build a site for Terry the Plumber", "develop the Neo Plumbing site" — delegate to the `developer` subagent. The `scout` subagent must have already run for that business first.

The full pipeline for any lead is: `lead-hunter` → `scout` → `developer`

Prototypes land in `prototypes/<business-slug>/`.
