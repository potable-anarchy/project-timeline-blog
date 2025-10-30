---
title: "Vibematch-Arena"
date: 2025-10-24
categories: [Game Development, AI]
tags: [javascript, game-development, multiplayer, ai-integration, live-coding, modding]
excerpt: "Multiplayer arena shooter where players hack gameplay with AI-generated mods in real-time"
external_url: "https://vibematch-arena.brad-dougherty.com"
---

## Vibematch-Arena: Live-Coding Combat

A multiplayer top-down shooter with a twist: **players can hack the game with AI while playing.** Press backtick to open the mod editor, ask an AI to generate custom gameplay code, hit Ctrl+Enter, and watch your modifications take effect instantly—no restart needed.

### The Core Innovation

#### AI-Powered Game Modding
- Ask AI: *"Add floating damage numbers"* → Get working JavaScript
- Hot-reload with Ctrl+Enter to inject code into the running game
- Direct access to game loop, rendering, and physics
- Modify gameplay without stopping the match

#### Live-Coding System
- In-game code editor with syntax highlighting
- Real-time code injection (no compilation, no restart)
- Example mods: rainbow trails, screen shake, custom HUD elements
- Mod API exposes game state, events, rendering hooks

**Example**: Want to make players leave particle trails? Open the editor, ask Claude Code to generate the mod, paste it in, reload. Done. The game continues running while you code.

### Technical Implementation

#### Game Architecture
- **Server**: Node.js + Socket.io (60-tick authoritative server)
- **Client**: Vanilla JavaScript ES modules + Canvas rendering
- **Mod System**: Dynamic ES module loading with hot-reload
- **Deployment**: Docker containers on Render with Cloudflare tunnels

#### Mod System Design
```javascript
// Mods have hooks into the game loop
export const onFrame = (game, ctx, deltaTime) => {
  // Custom rendering, physics, effects
};

export const onPlayerDeath = (game, killerPlayer, victimPlayer) => {
  // React to events
};
```

#### Key Technical Challenges
- **Hot-reload without breaking state**: Dynamic ES module imports with proper cleanup
- **Sandbox security**: Mods run in same context but with API boundaries
- **Performance**: Mod code runs every frame (60fps) without lagging
- **Multiplayer stability**: Client-side mods don't break server authority

### Gameplay Features

#### Core Shooter Mechanics
- 4 weapon types (pistol, SMG, shotgun, rifle)
- Health/armor system with pickups
- Lag-compensated hitscan combat
- Spawn protection and smart spawn points

#### Vibematch Mode
- Fast-paced arena combat
- Real-time scoreboard
- Vote system for game modes
- Grenades with power-throw mechanic

### Development Philosophy

#### Hackability as Gameplay
Rather than locking down the client code, embrace it. Make the game itself a platform for experimentation. Players aren't just consuming content—they're remixing the mechanics.

#### AI-Assisted Creativity
The mod system becomes 10x more powerful when paired with AI coding assistants. Players don't need to know the game's internals—they just describe what they want, and the AI generates compatible code.

### Technical Stack

- **Frontend**: Vanilla JavaScript (ES modules), Canvas 2D
- **Backend**: Node.js, Express, Socket.io
- **Infrastructure**: Docker, Cloudflare Tunnels, Render deployment
- **Architecture**: Client-side prediction, server authority, lag compensation

### Future Vision

#### Planned Enhancements
- **Server-side mod API**: Let mods affect all players (with voting)
- **Mod marketplace**: Share and discover community mods
- **AI mod generation endpoint**: Built-in AI assistant in the UI
- **Persistent mod profiles**: Save and sync your mod loadouts

#### Gameplay Expansion
- Additional weapons and power-ups
- Team-based modes
- Custom maps with level editor
- Tournament/ranked system

### Impact

This project explores the intersection of game development, live-coding environments, and AI-assisted creativity. It demonstrates that games can be platforms for experimentation where the boundaries between player and developer blur—especially when AI can generate code on demand.

The mod system architecture could extend beyond games to any real-time interactive application where users benefit from live customization without interrupting the experience.
