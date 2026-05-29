# 🚀 [Omnimerce] - Multi-Tenant E-commerce & ERP SaaS

[Omnimerce] is a comprehensive, production-ready Multi-Tenant SaaS platform designed to unify B2C E-commerce storefronts and B2B ERP operations. Engineered with a strict data-isolation architecture, it allows SaaS operators to offer tier-based subscriptions ranging from a basic Offline POS system to an advanced, multi-branch Omnichannel retail solution.

Built on a modern monorepo architecture using **Turborepo, Next.js (App Router), PostgreSQL, and Prisma ORM**, this project prioritizes scalability, security (soft-deletes & audit logs), and performance. 

## ✨ Key Features
* **True Multi-Tenancy:** Strict data isolation per tenant with module-based feature toggling (`isEcommerceEnabled`, `isProcurementEnabled`).
* **Tiered Subscription Models:** Dynamically limits branches, users, and features based on the active plan.
* **B2C Webstore:** Custom domains, shopping carts, marketing tools (coupons, banners), and checkout flows.
* **Advanced B2B Procurement:** Supplier management, automated Purchase Orders (PO), and stock receiving.
* **Enterprise Inventory Engine:** Multi-branch warehouse routing, stock transfers, barcode scanning, and precise FIFO stock batch tracking.
* **System Auditability:** Comprehensive activity logging and soft-delete patterns for immutable financial and operational records.

## 🛠️ Tech Stack
* **Framework:** Next.js (App Router)
* **Monorepo:** Turborepo
* **Database:** PostgreSQL + Prisma ORM
* **Styling:** Tailwind CSS + Shadcn UI
* **Authentication:** NextAuth.js (OAuth + OTP)
