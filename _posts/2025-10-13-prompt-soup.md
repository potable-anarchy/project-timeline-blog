---
title: "Prompt Soup"
date: 2025-10-13
categories: [Game Development, AI Research]
tags: [ruby, javascript, ai-research, machine-learning, data-collection, human-in-the-loop, comfyui]
excerpt: "Research platform disguised as a game—collecting human feedback on AI image generation to understand model attention mechanisms"
external_url: "https://prompt-soup-c26v.onrender.com"
---

## Prompt Soup: Gamified AI Research

A word-guessing game that doubles as a research platform for understanding AI image generation models. Players reconstruct prompts from AI-generated images while unknowingly providing valuable data about which prompt words actually manifest visually—revealing model attention patterns through gameplay.

### The Research Question

**Problem**: When AI models generate images from text prompts, not all words equally influence the output. Models use attention mechanisms and conditioning dropout (10-50% of text conditioning randomly dropped during training). But which words actually matter?

**Traditional Approaches**:
- Manual expert annotation (expensive, slow)
- Automated vision-language models (potentially biased)
- Attention weight visualization (model-specific, complex)

**Our Approach**: Let humans play a game and collect their intuition at scale.

### How It Works

#### The Game Mechanic
1. Player sees an AI-generated image (prompt hidden)
2. Candidate words float in an alphabet soup bowl
3. Player clicks words they think are in the prompt
4. Correct words reveal themselves, wrong words disappear
5. Find all prompt words to win

#### The Research Value

Each player interaction generates data:
- **Which words** were selected
- **How quickly** (reaction time)
- **In what order** (selection sequence)
- **By how many** players (consensus)

This reveals **word prevalence**—which words from prompts actually manifest visually in the generated images.

### The Prevalence Scoring Algorithm

From the whitepaper:

```
P(w,i) = α·S(w,i) + β·T(w,i) + γ·O(w,i)
```

Where:
- `S(w,i)` = Selection rate (what % of players chose this word)
- `T(w,i)` = Normalized inverse reaction time (how fast)
- `O(w,i)` = Order-based score (earlier selections score higher)

**Output**: A prevalence score for each word in each image, indicating how strongly that word manifested visually.

### Research Applications

#### 1. Model Attention Analysis
Compare which words different AI models prioritize:
- DALL-E vs Stable Diffusion vs Midjourney
- Which models better preserve prompt fidelity?
- Where does semantic dropout occur?

#### 2. Prompt Engineering Optimization
Data-driven insights for better prompts:
- Which words reliably influence output?
- Which modifiers actually work?
- Syntax patterns that improve effectiveness

#### 3. Human-AI Perception Mapping
Understanding the gap between intended prompts and perceived content:
- Do humans see what the model "attended" to?
- Consensus patterns across player populations
- Cultural variations in image interpretation

### Technical Implementation

#### Full-Stack Architecture
- **Frontend**: Vanilla JavaScript + Canvas (pixel art animation)
- **Backend**: Ruby/Sinatra with analytics pipeline
- **Database**: PostgreSQL tracking gameplay sessions
- **Image Generation**: ComfyUI with multiple AI models (242 images)

#### Data Collection Pipeline
```
Player clicks word → {word, timestamp, order, correct} →
Analytics aggregation → Prevalence scoring →
Model behavior insights
```

#### Research Infrastructure
```
research/
├── papers/WHITEPAPER.md    # Full methodology
├── notebooks/              # Jupyter analysis
├── data/                   # Gameplay datasets
└── figures/                # Visualizations
```

### Games with a Purpose (GWAP)

This extends Luis von Ahn's "ESP Game" concept (2004) to AI model interpretability:

**ESP Game**: Humans label images through gameplay
**Prompt Soup**: Humans annotate AI attention patterns through gameplay

The key difference: We're not labeling ground truth, we're measuring **human perception of AI-generated visual semantics**.

### Published Research

**Whitepaper**: *"Gamification as a Lens for Understanding AI Image Generation: Leveraging Human Play Patterns to Decode Model Attention Mechanisms"*

**Abstract**: "We propose that human gameplay patterns—including word selection order, reaction times, and success rates—serve as implicit annotations for understanding which semantic elements from text prompts manifest visually in AI-generated images."

### Why This Approach Works

#### Scalable Data Collection
- Entertainment drives participation (vs tedious annotation tasks)
- Passive collection during normal gameplay
- No training required for annotators
- Natural incentive structure (score = accuracy)

#### Implicit Ground Truth
- Players don't know they're doing research
- Natural, unbiased responses
- Consensus emerges from aggregate behavior
- Reaction time captures unconscious perception

#### Bidirectional Value
- Players get entertainment
- Researchers get data
- Prompt engineers get insights
- AI developers get model feedback

### Current Results

- **242 AI-generated images** across multiple models
- **Analytics dashboard** tracking word selections
- **Word cloud visualizations** of prevalence patterns
- **Per-image analysis** available at `/admin/image/:id`

### Future Research Directions

#### Cross-Model Comparison Study
Quantify differences in how DALL-E, Midjourney, and Stable Diffusion interpret prompts

#### Prevalence Prediction Models
Train ML models to predict word prevalence without human gameplay

#### Prompt Engineering Tools
API providing real-time prevalence scores for prompt optimization

#### Large-Scale Dataset Release
Target: 100,000+ gameplay sessions for public research use

### Impact

**For AI Research**: A novel approach to understanding model attention without requiring model internals access or expensive annotation.

**For Prompt Engineering**: Data-driven insights into which words actually influence outputs, moving beyond trial-and-error.

**For Game Design**: Demonstrates that entertainment and research aren't mutually exclusive—games can generate valuable scientific data while remaining genuinely fun.

This project bridges human-computer interaction, AI interpretability research, and gamification—showing that the path to understanding AI systems might run through understanding human perception of AI outputs.

---

**Play & Contribute**: [prompt-soup-c26v.onrender.com](https://prompt-soup-c26v.onrender.com)  
**Research**: Available in `/research` directory
