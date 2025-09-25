# Brad Dougherty's Project Timeline

A comprehensive portfolio showcasing all my projects over the years, built with Jekyll and the Minimal Mistakes theme.

## About

This site serves as a chronological timeline of my technical projects, experiments, and professional work. Each post represents a different project, documenting:
- The problem it solved
- Technologies used
- Key features and innovations
- Lessons learned
- Impact and outcomes

## Structure

Projects are organized chronologically, with the most recent work appearing first. Each project post includes:
- **Date**: When the project was completed or launched
- **Categories**: The type of project (Web Development, AI/ML, Data Science, etc.)
- **Tags**: Specific technologies and tools used
- **Description**: Detailed writeup of the project

## Adding New Projects

To add a new project to the timeline:

1. Create a new markdown file in `_posts/` with the format: `YYYY-MM-DD-project-name.md`
2. Include the following frontmatter:

```yaml
---
title: "Project Title"
date: YYYY-MM-DD
categories: [Category1, Category2]
tags: [tech1, tech2, tech3]
excerpt: "Brief one-line description of the project"
header:
  teaser: /assets/images/project-thumbnail.jpg  # optional
---
```

3. Write your project description using markdown
4. Commit and push to update the live site

## Local Development

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# View at http://localhost:4000
```

## Live Site

Visit the timeline at: https://projects.brad-dougherty.com

## Technologies

- Jekyll static site generator
- Minimal Mistakes theme
- GitHub Pages hosting
- Cloudflare DNS

---

*This repository tracks my journey as a developer through the projects I've built over the years.*
EOF </dev/null
