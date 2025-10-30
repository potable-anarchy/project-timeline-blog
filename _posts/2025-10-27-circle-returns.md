---
title: "Circle Returns"
date: 2025-10-27
categories: [Web Development, E-Commerce]
tags: [python, flask, ai, computer-vision, fintech, saas, google-gemini]
excerpt: "FBA reimbursement recovery platform using AI and computer vision to recover $2,880-$32,400+ annually from Amazon grading errors"
---

## Circle Returns: FBA Reimbursement Recovery

A specialized platform for Amazon FBA sellers to recover money lost to incorrect return grading. Combines mobile scanning, computer vision, AI-generated dispute letters, and case management to systematically document and dispute Amazon's warehouse errors—recovering thousands in lost revenue.

### The Business Problem

**Amazon frequently mis-grades returned inventory**, costing sellers thousands annually:

- **35% of returns** marked "CUSTOMER_DAMAGED + DEFECTIVE" are likely warehouse damage
- **21% of returns** show contradictory dispositions ("SELLABLE + DEFECTIVE")
- Without documentation, Amazon denies ~90% of reimbursement claims
- **With evidence**, approval rates jump to 40-70%

**The gap**: Sellers lack tools to efficiently document evidence and file claims at scale.

### The Solution Architecture

#### 1. Mobile Scanner (PWA)
- **Computer vision LPN extraction** using Google Gemini 2.5 Flash
- Multi-angle photo capture with metadata
- Offline-capable with background sync
- Auto-links scans to Amazon returns data

#### 2. AI Dispute Generator
- Analyzes disposition contradictions
- Generates policy-compliant dispute letters
- Cites specific FBA reimbursement policies
- Customizable templates per claim type

#### 3. Case Management System
- Batch similar claims (10-20 at once)
- Track status: Draft → Submitted → Approved/Rejected
- Analytics on success rates and total recovered value
- Evidence package exports (PDF + CSV)

### Technical Implementation

#### Computer Vision Pipeline
```python
# Google Gemini extracts LPN from barcode photo
response = gemini.generate_content([
    "Extract the LPN barcode text from this image",
    image_data
])
lpn = response.text  # "FBA15H3JK2M3"
# Auto-links to imported returns data
```

#### AI Dispute Generation
```python
# Analyzes evidence vs. Amazon's disposition
dispute = generate_dispute({
    'amazon_disposition': 'CUSTOMER_DAMAGED',
    'scan_photos': [photo1, photo2, photo3],
    'seller_notes': 'No visible damage, fully functional',
    'product_value': 25.00
})
# Outputs professional dispute letter with policy citations
```

#### Data Flow
```
Amazon CSV Import → Returns DB
     ↓
Physical Returns Arrive
     ↓
Mobile Scan (LPN + Photos) → Scans DB → Links to Returns
     ↓
Case Creation (batch similar items)
     ↓
AI Dispute Generation → Evidence Package
     ↓
Seller Central Submission → Track Outcome
```

### Real-World Results

**Case Study: Floor Tool Seller**
- 726 returns over 11 months
- 412 disputable units identified (56% of total)
- Estimated value: $10,300 at $25/unit
- With 50% success rate: **$5,150 recovered**
- Time investment: 27 hours (~$190/hour ROI)

### Key Features

#### Smart Opportunity Detection
- Analyzes return patterns from CSV imports
- Flags disposition contradictions automatically
- Prioritizes high-value recovery opportunities
- Dashboard shows monthly recovery potential

#### Evidence Package System
- PDF exports with photos + metadata
- Timeline of scan → return → dispute
- One-click copy for Seller Central
- Audit trail for accounting

#### Batch Processing
- Group similar claims together
- 5-20x faster than individual filing
- Track aggregate success rates
- Scale reimbursement operations

### Technical Stack

- **Backend**: Python Flask with SQLite/PostgreSQL
- **Frontend**: Vanilla JS, responsive PWA
- **AI/Vision**: Google Gemini 2.5 Flash API
- **Deployment**: Docker + Cloudflare Tunnels
- **Architecture**: Self-hosted for data privacy

### Business Model Innovation

**SaaS for FBA Operations**: This isn't just software—it's a revenue recovery system. The platform pays for itself with a single successful $100 claim.

**Pricing Structure**:
- Managed hosting: $99/month
- Self-hosted: Open to enterprise
- ROI breakeven: ~1 successful claim/month

### Privacy & Data Control

**Self-hosted by design**:
- Seller's data never leaves their infrastructure
- No third-party data storage (except Gemini API)
- Export capability for all records
- Optional: Swap Gemini for local AI models

### Development Philosophy

#### Built by Operators
Created from real FBA seller pain points after analyzing 726 returns and identifying $10K+ in recoverable reimbursements. Every feature solves an actual workflow bottleneck.

#### Mobile-First Evidence
Amazon disputes live or die on evidence quality. A mobile scanner that captures LPN + photos in 2-3 minutes per item makes documentation frictionless—turning evidence collection from a blocker into routine.

#### AI as Force Multiplier
Gemini handles two tedious tasks:
1. **Vision**: Extract LPN from barcode photos (no manual typing)
2. **Text**: Generate policy-compliant dispute letters (no template management)

This lets sellers focus on high-value activities: identifying opportunities and tracking outcomes.

### Technical Challenges Solved

#### LPN Extraction Accuracy
- FBA barcode labels often damaged or poorly lit
- Solution: Multi-shot capture + Gemini's robust OCR
- Fallback: Manual entry with validation

#### Offline Scanner Operation
- Warehouse environments have poor connectivity
- Solution: PWA with IndexedDB + background sync
- Scans queue locally, upload when connected

#### Dispute Letter Quality
- Amazon requires specific policy citations
- Solution: Prompt engineering with FBA reimbursement policy context
- Template system for different claim types

#### Scale vs. Evidence Quality
- More claims = more revenue, but evidence quality can't slip
- Solution: Batch processing with per-item photo requirements
- Quality gates before case submission

### Future Roadmap

**SP-API Integration**: Auto-import returns data (eliminate CSV uploads)

**Mobile Apps**: Native iOS/Android with better camera integration

**Chrome Extension**: File disputes directly from Seller Central

**Multi-Marketplace**: Expand beyond Amazon US

**Predictive Analytics**: ML models predicting claim success probability

### Impact

**For FBA Sellers**: Transforms reimbursement recovery from ad-hoc firefighting to systematic revenue recovery—$2,880-$32,400+ annually for typical sellers.

**For E-Commerce Operations**: Demonstrates that AI + computer vision can solve tedious, high-value business processes that previously required expensive manual labor or consultants.

**For SaaS Design**: Shows the power of vertical-specific tools over horizontal platforms. Generic inventory management can't solve this problem—you need purpose-built tooling for the specific Amazon FBA reimbursement workflow.

---

**Architecture**: Self-hosted Python/Flask + Gemini AI  
**Business Value**: $2,880-$32,400+ annual recovery potential  
**Key Innovation**: Mobile CV + AI disputes = scalable evidence collection
