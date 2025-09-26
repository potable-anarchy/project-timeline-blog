---
title: "Live Migration Hypervisor POC"
date: 2011-09-01
categories: [Infrastructure, Virtualization]
tags: [virtualization, virtualbox, xenserver, drbd, high-availability, netflix]
excerpt: "Engineered a proof-of-concept hypervisor at Netflix combining VirtualBox/XenServer with DRBD to create a free alternative to VMware vMotion for DVD shipping hub infrastructure."
status: "completed"
external_url: false
---

## Live Migration Hypervisor Proof of Concept at Netflix

Developed an innovative hypervisor solution that demonstrated the feasibility of live VM migration using open-source technologies, offering a cost-effective alternative to expensive VMware vMotion licensing for Netflix's DVD shipping hub infrastructure.

### The Business Case

Netflix's DVD shipping hubs operated on tight margins with aging hardware. While VMware vMotion offered the perfect solution for hardware flexibility and maintenance, the licensing costs were prohibitive for the DVD business unit. This project explored whether open-source alternatives could deliver similar functionality at zero licensing cost.

### Technical Architecture

**Hypervisor Layer**
- Started with VirtualBox for initial prototyping due to its simplicity and API flexibility
- Later migrated to XenServer for better performance and enterprise features
- Implemented custom orchestration layer to manage VM lifecycle and migration events

**Storage Replication with DRBD**
- Leveraged DRBD (Distributed Replicated Block Device) for real-time block-level replication
- Achieved near-synchronous replication between hosts with minimal performance impact
- Enabled shared-nothing architecture that didn't require expensive SAN infrastructure

**Live Migration Implementation**
- Developed scripts to coordinate VM state synchronization during migration
- Implemented network bridging to maintain connectivity during host transitions
- Achieved migration times of under 30 seconds for typical workloads

### Key Features

**Zero Licensing Cost**
- Built entirely on open-source components
- No recurring licensing fees or vendor lock-in
- Potential savings of hundreds of thousands in VMware licensing

**Hardware Flexibility**
- Enabled live migration of VMs between hosts for hardware maintenance
- Extended the useful life of aging hardware by allowing dynamic workload distribution
- Reduced the need for over-provisioning by enabling better resource utilization

**Rough but Functional**
- While not as polished as commercial solutions, the POC successfully demonstrated core functionality
- Proved that DVD hub workloads could run on alternative virtualization platforms
- Identified areas where additional development would be needed for production deployment

### Outcomes

**Technical Success**
- Successfully demonstrated live migration between hosts with minimal downtime
- Validated DRBD as a viable alternative to shared storage for this use case
- Proved that open-source components could meet the basic requirements

**Business Impact**
- Although never deployed to production, the POC influenced infrastructure decisions
- Demonstrated the viability of open-source alternatives for cost-sensitive business units
- Provided leverage in vendor negotiations by showing viable alternatives existed

### Lessons Learned

This project highlighted both the potential and challenges of building enterprise infrastructure on open-source components. While technically feasible, the operational overhead and support requirements ultimately favored commercial solutions for Netflix's scale. However, the POC provided valuable insights into virtualization architecture and influenced future infrastructure decisions.

The project exemplified Netflix's culture of innovation and willingness to explore unconventional solutions to reduce costs and improve efficiency, even in the traditional DVD business.