# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
This is a Jekyll-based portfolio site that showcases Brad Dougherty's projects in a chronological timeline format. The site uses the Minimal Mistakes theme and is hosted on GitHub Pages with a custom domain at https://projects.brad-dougherty.com.

## Commands

### Local Development
```bash
# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

The site will be available at http://localhost:4000

## Architecture

### Site Structure
- **Jekyll Static Site**: Uses Jekyll with the Minimal Mistakes remote theme
- **Posts**: All project entries are markdown files in `_posts/` following the naming convention `YYYY-MM-DD-project-name.md`
- **GitHub Pages**: Automatically deploys from the main branch
- **Custom Domain**: Configured via CNAME file to point to projects.brad-dougherty.com

### Post Format
Each project post requires specific frontmatter:
```yaml
---
title: "Project Title"
date: YYYY-MM-DD
categories: [Category1, Category2]
tags: [tech1, tech2, tech3]
excerpt: "Brief one-line description"
header:
  teaser: /assets/images/thumbnail.jpg  # optional
---
```

### Key Configuration
- `_config.yml`: Site-wide settings, theme configuration, author details
- `index.html`: Homepage with custom notice banner
- `Gemfile`: Manages Ruby dependencies for GitHub Pages compatibility