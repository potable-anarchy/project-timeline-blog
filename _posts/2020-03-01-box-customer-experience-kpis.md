---
title: "Customer Experience Report & KPI Framework"
date: 2020-03-01
categories: [Data Analytics, Customer Experience]
tags: [python, excel, kpi, metrics, customer-experience, box, reporting]
excerpt: "Designed and built Box's Customer Experience Report and KPI framework, initially in Python then strategically migrated to Excel for rapid prototyping, focusing metrics exclusively on customer interruption impact."
status: "completed"
external_url: false
---

## Customer Experience Report & KPI Framework at Box

Created a comprehensive reporting framework and KPI system that fundamentally changed how Box measured and improved customer experience, with a unique focus on quantifying and minimizing customer interruptions.

### The Challenge

Box needed a way to measure the real impact of service issues on customers. Traditional metrics like uptime and error rates didn't capture the true customer experience. The organization needed KPIs that directly correlated with customer satisfaction and business outcomes.

### Evolution of the Solution

**Phase 1: Python Foundation**
- Built initial reporting system in Python for robust data processing
- Integrated multiple data sources: monitoring systems, support tickets, user telemetry
- Developed algorithms to correlate technical metrics with customer impact

**Phase 2: Strategic Pivot to Excel**
- Recognized need for rapid iteration and stakeholder accessibility
- Made the unconventional decision to migrate to Excel for faster prototyping
- Successfully ported complex Python logic to Excel formulas and VBA
- Enabled non-technical stakeholders to understand and modify reports

### Customer Interruption Metrics

**Innovative KPI Design**
- Pioneered metrics focused solely on customer interruption, not just system availability
- Developed "Customer Minutes Lost" metric that quantified actual user impact
- Created severity weighting based on interruption type and affected user segments

**Key Metrics Framework**
- **Interruption Frequency**: How often customers experienced issues
- **Interruption Duration**: Length of customer impact, not just incident duration  
- **Interruption Scope**: Number of affected customers and their business criticality
- **Recovery Experience**: Time to workaround or resolution from customer perspective

### Technical Implementation

**Data Pipeline**
- Automated data collection from 15+ different sources
- Built ETL processes that could run in both Python and Excel environments
- Implemented data quality checks and anomaly detection

**Excel Engineering**
- Developed sophisticated Excel workbooks with 50+ interconnected sheets
- Created dynamic dashboards with automatic refresh capabilities
- Built custom VBA functions for complex calculations Excel couldn't handle natively
- Implemented version control and testing frameworks for Excel workbooks

**Reporting Capabilities**
- Real-time executive dashboards updated hourly
- Weekly deep-dive reports for engineering teams
- Monthly trend analysis with predictive modeling
- Ad-hoc investigation tools for incident analysis

### Business Impact

**Organizational Alignment**
- KPIs adopted company-wide as primary customer experience metrics
- Influenced product roadmap prioritization based on interruption reduction potential
- Changed how incidents were prioritized - customer impact became the primary factor

**Measurable Improvements**
- 40% reduction in customer interruptions within first year
- 25% improvement in customer satisfaction scores
- 50% faster incident resolution due to better impact visibility

**Cultural Shift**
- Engineers began thinking "customer first" when designing systems
- Support teams could quantify the business impact of their escalations
- Product teams used interruption data to justify reliability investments

### Innovation Highlights

**Excel as a Power Tool**
- Proved Excel could handle complex analytics when properly engineered
- Reduced report development time from weeks to days
- Enabled rapid A/B testing of different metric calculations
- Allowed stakeholders to self-serve data exploration

**Customer-Centric Metrics**
- Shifted focus from infrastructure metrics to customer experience
- Created industry-leading framework for measuring actual user impact
- Influenced how other companies thought about reliability metrics

### Lessons Learned

**Tool Selection Philosophy**
- Sometimes the "less sophisticated" tool is the right choice
- Accessibility and iteration speed can outweigh technical elegance
- Meeting stakeholders where they are increases adoption and impact

**Metric Design Principles**
- Metrics should measure what matters to customers, not what's easy to measure
- Complex systems require sophisticated metrics that capture nuanced impact
- The best KPIs change behavior, not just measure it

This project demonstrated that innovative thinking about both metrics and tools could drive significant improvements in customer experience. The framework became a cornerstone of Box's customer-first culture and proved that unconventional approaches could deliver exceptional results.