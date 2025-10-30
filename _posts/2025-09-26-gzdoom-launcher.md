---
title: "GZDoom Launcher"
date: 2025-09-26
categories: [Gaming, Developer Tools]
tags: [python, gaming, terminal-ui, doom, mod-management]
excerpt: "Terminal-based launcher for GZDoom with preset management and interactive mod selection"
external_url: "https://github.com/potable-anarchy/gzdoom-launcher"
---

## GZDoom Launcher: Terminal Mod Manager

A terminal-based launcher that transforms GZDoom mod management from tedious command-line arguments into an efficient preset system with interactive mod selection.

### The Problem

**GZDoom mod management requires**:
- Complex command-line arguments for each launch
- Manual tracking of mod load orders
- Remembering favorite mod combinations
- Retyping long commands repeatedly

### The Solution

**Interactive Terminal UI**:
- Browse and select mods with keyboard navigation
- Save favorite configurations as named presets
- Launch with a single command
- Edit and manage preset library

### Core Features

#### Preset System
```bash
# Save current mod selection
> save-preset "brutal-doom-hd"

# Quick launch later
> launch brutal-doom-hd
```

#### Interactive Mod Browser
- Multi-select interface
- Load order control
- WAD and PK3 detection
- Conflict warnings

### Technical Implementation

- **Python with terminal UI library**
- **Automatic mod directory scanning**
- **Configuration file management**
- **GZDoom command builder**
- **Cross-platform support**

### User Experience

1. Launch the tool
2. Browse available mods (keyboard-driven)
3. Select and order mods
4. Save as preset (optional)
5. Launch GZDoom with configuration

### Design Philosophy

**Terminal-First Benefits**:
- Fast keyboard interaction
- Works over SSH
- No GUI overhead
- Scriptable and automatable

### Use Cases

- **Mod Enthusiasts**: Manage large collections efficiently
- **Testing**: Quick iteration on mod combinations
- **Speedrunners**: Consistent, reliable configurations
- **Experimentation**: Easy mod discovery and testing

### Impact

Demonstrates that well-designed terminal interfaces can provide better UX than GUIs for power users. The preset system eliminates cognitive overhead from mod management, making experimentation more accessible.
