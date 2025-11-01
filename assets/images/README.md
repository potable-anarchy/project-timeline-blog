# Project Images

This directory contains images for project posts displayed on the timeline.

## Directory Structure

Each project should have its own subdirectory:
```
assets/images/
├── project-name-1/
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   └── screenshot-3.jpg
├── project-name-2/
│   ├── demo.png
│   └── interface.png
└── README.md
```

## Adding Images to Posts

To add a gallery to a project post, include the `gallery` field in your frontmatter:

```yaml
---
title: "Project Name"
date: 2025-01-01
categories: [Web Development]
tags: [javascript, react]
excerpt: "Brief description"
gallery:
  - url: /assets/images/project-name/screenshot-1.jpg
    title: "Main interface"
  - url: /assets/images/project-name/screenshot-2.jpg
    title: "Settings panel"
  - url: /assets/images/project-name/screenshot-3.jpg
    title: "Mobile view"
---
```

## Image Guidelines

- **Format**: JPG or PNG
- **Size**: Recommended width 1200-1600px for good quality
- **Aspect Ratio**: 16:9 works best for thumbnails
- **File Size**: Keep under 500KB per image (optimize with tools like TinyPNG)
- **Naming**: Use descriptive names like `interface.jpg`, `mobile-view.png`, etc.

## Timeline Display

- **Desktop**: Up to 3 thumbnails shown per project, alternating left/right
- **Mobile**: Thumbnails displayed in a horizontal row above content
- **Gallery**: Click any thumbnail to open full-size lightbox with navigation
- **+N Badge**: If more than 3 images exist, a "+N" badge shows the count

## Features

- ✅ Alternating left/right layout on timeline
- ✅ Lightbox modal with keyboard navigation (← → Esc)
- ✅ Lazy loading for performance
- ✅ Mobile responsive
- ✅ Click to expand full-size
- ✅ Previous/Next navigation in gallery

## Example Posts

See `_posts/2025-07-23-reddit-scroller.md` for a working example.
