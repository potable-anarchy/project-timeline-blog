---
title: "inbox2gallery"
date: 2025-09-24
categories: [Web Development]
tags: [javascript, pwa, gmail-api, privacy, client-side]
excerpt: "Privacy-first PWA that extracts photos from Gmail threads into beautiful galleries—entirely client-side"
---

## inbox2gallery: Email Photo Extractor

A Progressive Web App that transforms scattered email photos into organized galleries by extracting images from Gmail threads—all processing happens in your browser with complete privacy.

### The Problem

Photos shared via email become scattered across threads and conversations, making it difficult to:
- View all images from a conversation
- Find photos from specific senders
- Browse email photos like a gallery
- Export collections easily

### The Solution

**Client-Side Processing**: Connect to Gmail via OAuth, extract images from threads, and display in a clean gallery interface—all without sending data to any server.

### Privacy-First Architecture

- **No backend servers** - pure client-side JavaScript
- **No photo uploads** - images never leave your browser
- **No data storage** - everything processes in memory
- **Read-only Gmail access** - revokable OAuth permissions
- **Transparent operation** - open source, verifiable privacy

### Technical Implementation

#### Progressive Web App
- Installable to home screen
- Works offline after initial load
- Fast, native-like experience
- Mobile-optimized interface

#### Gmail API Integration
- OAuth 2.0 authentication
- Read-only email access
- Efficient API batching to handle rate limits
- Lazy loading for performance

### Key Features

- **Thread-based organization** - group photos by conversation
- **Sender filtering** - find all photos from specific contacts
- **Gallery view** with lightbox
- **Bulk export** capabilities
- **Memory-efficient** processing of large collections

### Use Cases

- Recovering family photos from email chains
- Organizing client photo submissions
- Finding images from specific time periods
- Creating collections from shared trips

### Technical Challenges Solved

- **Gmail API rate limiting** - efficient batching strategies
- **Large attachment handling** - streaming and lazy loading
- **Client-side performance** - processing hundreds of images
- **Image format compatibility** - handling various email encodings

### Impact

Demonstrates that privacy-respecting tools can provide powerful functionality without centralized data collection. Users maintain complete control over their data while getting utility from email photo organization.
