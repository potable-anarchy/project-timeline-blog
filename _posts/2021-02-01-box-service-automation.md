---
title: "Production Service Request Automation"
date: 2021-02-01
categories: [Automation, Process Improvement]
tags: [jira, service-desk, automation, workflow, box, devops]
excerpt: "Transformed Box's chaotic production service request process from informal texts and emails to a fully automated Jira Service Desk system with intelligent routing and execution workflows."
status: "completed"
external_url: false
---

## Production Service Request Automation at Box

Revolutionized how production service requests were handled at Box by implementing a comprehensive automation platform that replaced ad-hoc communication with structured, automated workflows, dramatically improving service delivery speed and reliability.

### The Problem

Production service requests at Box were a mess:
- Engineers texted or emailed requests without any standard format
- No tracking of request status or SLAs
- Requests often got lost or forgotten in busy inboxes
- No audit trail for compliance and security requirements
- Manual execution led to errors and inconsistencies
- Best practices were routinely ignored due to urgency

### The Solution

**Partnership with IT**
- Collaborated with IT to implement Jira Service Desk as the centralized request platform
- Designed intuitive request forms that guided users to provide necessary information
- Created service catalog with pre-defined request types and automatic routing

**Intelligent Automation Design**
- Built automated workflows that validated requests against security policies
- Implemented approval chains based on request risk and scope
- Created execution automation that performed validated requests without human intervention

### Key Features

**Smart Request Forms**
- Dynamic forms that adapted based on request type
- Built-in validation to ensure all required information was provided
- Automated suggestions based on common request patterns
- Integration with corporate directory for automatic approvals routing

**Automated Execution Workflows**
- **Database Access Requests**: Automatically provisioned temp credentials with appropriate permissions
- **Server Access**: Created time-limited access tokens with audit logging
- **Configuration Changes**: Validated changes against safety rules and auto-deployed if approved
- **Data Exports**: Automated secure data extraction with encryption and transfer

**Compliance and Security**
- Every request tracked with full audit trail
- Automatic security review triggers for sensitive operations
- Enforcement of separation of duties and change approval policies
- Integration with security scanning tools to validate requests

### Technical Implementation

**Architecture**
- Jira Service Desk as the front-end portal
- Custom automation scripts in Python for execution
- Integration with HashiCorp Vault for secrets management
- Webhook-based communication between systems

**Automation Engine**
- Built modular automation components for common tasks
- Implemented rollback capabilities for all automated changes
- Created dry-run mode for testing complex requests
- Developed health checks to verify successful execution

**Monitoring and Reporting**
- Real-time dashboard of request status and SLA compliance
- Weekly reports on request patterns and automation success rates
- Alerting for failed automations or SLA breaches
- Analytics to identify opportunities for new automation

### Results

**Efficiency Gains**
- **95% reduction** in request processing time (from hours to minutes)
- **80% of requests** fully automated without human intervention
- **Zero** lost or forgotten requests after implementation
- **60% decrease** in production incidents caused by manual errors

**Compliance Improvements**
- 100% audit trail for all production changes
- Automatic enforcement of security policies
- Simplified compliance reporting for SOC2 and other standards
- Reduced security exceptions by 75%

**User Satisfaction**
- Net Promoter Score increased from -20 to +65
- Engineers praised the transparency and speed of the new system
- Reduced friction led to better adherence to best practices
- Self-service capabilities empowered teams to move faster

### Cultural Impact

**From Chaos to Order**
- Shifted culture from "just get it done" to "get it done right"
- Established production changes as a disciplined practice
- Created trust between development and operations teams

**Best Practices Adoption**
- Automation made following best practices the path of least resistance
- Request templates educated users on proper procedures
- Success metrics encouraged continuous improvement

### Scaling Success

**Expansion Beyond Initial Scope**
- System adopted by other departments for their service requests
- Framework reused for customer-facing request automation
- Patterns influenced company-wide automation strategy

**Continuous Enhancement**
- Regular reviews to identify new automation opportunities
- User feedback incorporated into quarterly improvements
- Machine learning added to predict and pre-stage common requests

### Key Learnings

**Change Management**
- Started with opt-in adoption to build trust and refine the system
- Used success stories to drive organic adoption
- Made the new system significantly better than the old way

**Automation Philosophy**
- Automate the common case, handle exceptions manually
- Build trust through transparency and reliability
- Make the right way the easy way

This project transformed a major pain point into a competitive advantage, demonstrating how thoughtful automation could improve both efficiency and compliance while actually making engineers' lives easier.