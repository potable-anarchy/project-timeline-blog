---
title: "Self-Service MediaWiki Platform"
date: 2009-06-01
categories: [Web Development, Collaboration Tools]
tags: [mediawiki, php, self-service, collaboration, university, automation]
excerpt: "Built a custom self-service MediaWiki installer enabling students, faculty, and staff at Willamette University to spawn and manage their own wikis, revolutionizing campus-wide collaboration."
status: "completed"
external_url: false
---

## Self-Service MediaWiki Platform at Willamette University

Developed a pioneering self-service platform that empowered the Willamette University community to create and manage their own MediaWiki instances, transforming how students, faculty, and staff collaborated on projects and shared knowledge.

### The Challenge

The university needed a way to facilitate collaboration across departments, research groups, and student organizations, but the IT department couldn't handle the overhead of manually provisioning and managing individual wiki instances for each request.

### The Solution

**Custom MediaWiki Installer**
- Built an automated provisioning system that allowed users to spawn their own MediaWiki instances with a single click
- Each wiki was sandboxed with its own database and configuration, ensuring complete isolation and security
- Implemented role-based access control allowing wiki creators to manage their own user permissions

**Self-Service Management Portal**
- Created an intuitive web interface where users could:
  - Request new wiki instances with customizable templates
  - Manage user access and permissions
  - Configure wiki settings without IT intervention
  - Archive or delete wikis when projects completed

**Automated Infrastructure**
- Developed scripts to handle database provisioning, Apache virtual host configuration, and DNS updates
- Implemented automated backups and maintenance routines for all wiki instances
- Built monitoring and alerting to ensure platform stability

### Impact

**Collaboration Revolution**
- Over 200 wikis created in the first year alone
- Enabled cross-departmental research projects that weren't previously feasible
- Student organizations adopted wikis for event planning and knowledge transfer

**IT Efficiency**
- Reduced wiki provisioning time from days to minutes
- Eliminated 95% of wiki-related support tickets
- Freed IT staff to focus on strategic initiatives rather than routine provisioning

### Technical Stack

- **Backend**: PHP custom framework for orchestration
- **Database**: MySQL with automated instance provisioning
- **Web Server**: Apache with dynamic virtual host configuration
- **Authentication**: Integration with university LDAP for single sign-on

This platform became a model for self-service IT at Willamette University and demonstrated how empowering users with the right tools could dramatically increase collaboration while reducing operational overhead.