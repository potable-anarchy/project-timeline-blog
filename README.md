# Project Timeline Blog

A minimal Minimal Mistakes Jekyll blog for showcasing your project timeline chronologically.

## Setup Instructions

1. **Install Ruby and Bundler** (if not already installed):
   ```bash
   # On macOS with Homebrew
   brew install ruby
   gem install bundler
   ```

2. **Install Dependencies**:
   ```bash
   bundle install
   ```

3. **Serve Locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View Your Site**:
   Open http://localhost:4000 in your browser

## Adding New Projects

Create new markdown files in the `_posts` directory with the following naming convention:
`YYYY-MM-DD-project-title.md`

### Post Template:
```markdown
---
title: "Your Project Title"
date: YYYY-MM-DD
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
excerpt: "Brief description of your project"
---

## Project Description

Your detailed project description goes here...

### Key Features
- Feature 1
- Feature 2

### Technologies Used
- Technology 1
- Technology 2

### Results/Impact
What was achieved with this project.
```

## Customization

- Edit `_config.yml` to update site information
- Modify the author section in `_config.yml` with your details
- Add your bio photo to `/assets/images/bio-photo.jpg`
- Customize the theme skin in `_config.yml` by changing `minimal_mistakes_skin`

## Theme Skins Available
- "default"
- "air" 
- "aqua"
- "contrast"
- "dark"
- "dirt"
- "neon"
- "mint"
- "plum"
- "sunrise"

## GitHub Pages Deployment

1. Push your repository to GitHub
2. Go to Settings > Pages
3. Select "Deploy from a branch" and choose your main branch
4. Your site will be available at `https://yourusername.github.io/repository-name`

## File Structure
```
project-timeline-blog/
├── _config.yml          # Site configuration
├── _posts/              # Your project posts
├── index.html           # Homepage
├── Gemfile             # Ruby dependencies
└── README.md           # This file
```
EOF </dev/null
