# Pontora Marketing Website

A premium, modern, and highly optimized marketing and landing website built on **Astro v6**, **React**, **Tailwind CSS v4**, and **MDX**. 

This repository leverages a fully modular, section-based frontmatter schema structure that enables you to add, configure, and reorder sections dynamically from your markdown content folders..

---

## 📖 Product Content Brief

### 1. Product Positioning
* **Product Name**: Pontora
* **One-Line Positioning**: Pontora is a multi-tenant operations platform for trustee firms, companies, site managers, and employees to manage workforce administration, documents, tasks, approvals, timesheets, receipts, and daily business operations from one secure workspace.
* **Short Description**: Pontora brings company administration, employee records, trustee collaboration, digital documents, task management, timesheets, accounting documents, receipts, and operational workflows into one connected platform. It is built for organizations that need structured employee management, trusted external oversight, location-based operations, and clean digital records without scattered spreadsheets, email threads, or disconnected tools.
* **Long Description**: Pontora helps businesses and trustee firms run day-to-day administration with more control, visibility, and accountability. Companies can manage employees, locations, documents, tasks, forms, billing, timesheets, receipts, creditors, and business settings from a central company workspace. Employees get a focused self-service area to complete onboarding, manage their profile, upload documents, submit forms, track tasks, and handle time-related workflows. Trustee firms can manage client companies, assign internal team members, create approval tasks, review operational records, and support companies through a dedicated trustee workspace.
  
  The platform is designed around real organizational roles instead of generic user accounts. A company admin, employee, site manager, trustee admin, and trustee team member each sees the workflows that matter to them. This keeps daily work focused while preserving organization-level governance, auditability, and access control.

### 2. The Problem Pontora Solves
Modern businesses often run critical administration across too many disconnected tools:
* Employee data lives in spreadsheets.
* Documents move through email and manual folders.
* Tasks and approvals are hard to trace.
* Time, vacation, and working-hour rules are tracked separately.
* Receipts, creditor invoices, and restaurant/gastro daily revenue records are not connected to operational context.
* Trustee firms support companies through back-and-forth communication instead of structured workflows.
* Site managers need local visibility without receiving unrestricted company admin access.

Pontora solves this by creating one structured operating system for business administration. Each user works from the right role-based panel, and every module connects back to the organization, location, employee, and trustee context.

### 3. Role-Based Workspaces & Target Audience

* **Company Admin Workspace**: The operational command center for a company. Includes dashboards, employee management, documents, forms, tasks, timesheets, gastro management, receipts, creditors, notifications, billing, company settings, and trustee collaboration.
* **Employee Workspace**: A focused self-service area for personal employment workflows: onboarding profile completion, document uploads, forms, assigned tasks, timesheets, and notifications.
* **Trustee Admin Workspace**: Supports firms managing multiple client companies. Allows managing the firm, client company assignments, approvals, and trustee-specific notifications.
* **Trustee Team Member Workspace**: Scoped by the trustee organization to support assigned client companies with approvals, tasks, and document reviews.
* **Site Managers**: Location-specific access to handle local tasks and operational workflows without full company-level control.

### 4. Complete Product Module Inventory

| Area | Included Modules |
| :--- | :--- |
| **Role Workspaces** | Company dashboard, employee dashboard, trustee dashboard |
| **Access and Identity** | Authentication, registration, password update, logout, profiles, account settings |
| **Workspace Context** | Workspace switcher, active organization, active location, trustee managed-company mode |
| **Onboarding** | Company onboarding, trustee onboarding, employee onboarding |
| **People** | Employee management, trustee team members, organization members |
| **Company Operations** | Company settings, locations, utilities, activity logs, notifications |
| **Trustee Operations** | Client companies, trustee-company assignments, approvals, firm settings, invitations |
| **Documents** | Documents, employee documents, company documents, system documents, generic documents, issued documents, document categories |
| **Document Automation** | Document templates, document generator, macros, fillable fields, PDF export |
| **Forms** | Form templates, system forms, form builder, submitted forms, comments, attachments |
| **Tasks** | Company tasks, employee tasks, site manager tasks, comments, attachments, archive flows |
| **Time** | Timesheets, working hours, holidays, vacation, leave, balances, payouts, adjustments |
| **Finance Operations** | Receipts, cashbook, receipt labels, OCR/accounting extraction, creditors, accounting documents |
| **Gastro Operations** | Restaurant/gastro daily sales entries, gastro management, gastro labels, billable restaurant locations, multi-location daily operations |
| **Billing** | Plans, subscriptions, trials, billing portal, add-on module access, subscription guards |
| **Legal and Compliance** | Privacy policy, consent banner, re-consent, GDPR/compliance documentation, recovery flows |
| **Localization** | Translation files, language support, translation manager tools |
| **Support States** | Offline, inactive organization/location, payment result, app updates, not-found pages |
| **Organization Management** | Organization picker, account switcher, create organization, member invitations, member roles, organization settings |
| **Public Website** | Marketing homepage, pricing, FAQ, testimonials, contact form, blog tags, sitemap, robots, metadata |
| **Builder Tools** | Rich text editor, form builder, document builder, macro editor, Lexical editor components |

---

## 🛠️ Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed (v20+ recommended).

### 1. Install Dependencies
```bash
yarn install
# or
npm install
```

### 2. Start the Development Server
```bash
yarn dev
# or
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to preview the site.

### 3. Build for Production
Compiles optimized static HTML files under the `/dist` directory.
```bash
yarn build
# or
npm run build
```

### 4. Preview the Production Build Locally
```bash
yarn preview
# or
npm run preview
```

---

## 📁 Project Structure

```text
├── src/
│   ├── config/            # Core configuration files (site data, menus, styles)
│   │   ├── config.json    # Branding, metadata, URLs, navigation buttons
│   │   ├── menu.json      # Main menu and footer links setup
│   │   └── theme.json     # Custom color palettes and typography scales
│   ├── content/           # Declarative page and section content (MDX/MD)
│   │   ├── homepage/      # Sections, content mapping, CTA setups
│   │   ├── blog/          # Blog indexing schema and single posts
│   │   └── pages/         # Static policy layouts (Privacy Policy, Terms)
│   ├── layouts/           # Page templates, base frames, and section partials
│   │   ├── Base.astro     # Core template wrapper (with HTML scope metadata)
│   │   ├── components/    # Reusable widgets (ImageMod, Logo, Pagination, JsonLd)
│   │   └── partials/      # Modular section layouts (HomeBanner, CallToAction, Clients)
│   ├── pages/             # Dynamic page routes matching Astro schemas
│   │   └── about.astro    # About page route loading about content
│   └── styles/            # Custom CSS styles
├── public/                # Static assets served at the root (logos, robots.txt, llms.txt)
├── vercel.json            # Clean URLs configurations and permanent 301 redirects
├── astro.config.mjs       # Astro configurations (MDX and Sitemap setup)
└── package.json           # Scripts and package dependencies
```

---

## ⚙️ Customization Guide

### Site Branding & URLs
To update the logo text, site title, contact configurations, or base URLs, edit [src/config/config.json](file:///d:/Office/pontora-marketing-website-/src/config/config.json).

### Navigations & Menus
Add, remove, or modify links in the header navigation or footer section links inside [src/config/menu.json](file:///d:/Office/pontora-marketing-website-/src/config/menu.json).

### Colors & Typography
Update the primary, secondary, and tertiary theme colors or choose custom font stacks inside [src/config/theme.json](file:///d:/Office/pontora-marketing-website-/src/config/theme.json).
