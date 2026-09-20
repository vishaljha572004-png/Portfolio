export const blogs = [
  {
    id: "jwt-auth-best-practices",
    slug: "jwt-auth-best-practices",
    title: "Securing APIs: JWT Authentication Best Practices in Node.js",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    excerpt: "How I implemented secure, role-based JWT authentication across my full-stack applications, handling token refresh and XSS vulnerabilities.",
    tags: ["Node.js", "Security", "Authentication"],
    content: `
# Securing APIs with JWT in Node.js

Authentication is the backbone of any modern web application. When building **PGSphere** and **V-Mart**, I needed a stateless, scalable way to manage user sessions. JSON Web Tokens (JWT) were the obvious choice, but implementing them securely is harder than it looks.

Here are the best practices I followed.

## 1. Never Store Tokens in localStorage
The biggest mistake developers make is storing JWTs in \`localStorage\`. This exposes the token to **Cross-Site Scripting (XSS)** attacks. Any malicious script running on your page can read \`localStorage\`.

**The Fix:** I store JWTs in \`httpOnly\`, \`secure\`, \`SameSite=Strict\` cookies. This ensures the browser automatically sends the token with every request, but JavaScript cannot access it.

\`\`\`javascript
res.cookie('token', jwtToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 3600000 // 1 hour
});
\`\`\`

## 2. Short-Lived Access Tokens & Refresh Tokens
If an access token is compromised, a short expiration time minimizes the damage. I use 15-minute access tokens and 7-day refresh tokens.

When the access token expires, the client silently requests a new one using the refresh token (which is also stored in an httpOnly cookie, but perhaps on a stricter path like \`/api/refresh\`).

## 3. Role-Based Access Control (RBAC)
In PGSphere, we have Admins and Students. Instead of checking roles in every route, I built a scalable middleware.

\`\`\`javascript
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

// Usage
router.delete('/tenant/:id', authenticate, authorize('admin'), deleteTenant);
\`\`\`

By following these patterns, the backend remains stateless while providing enterprise-grade security.
    `
  },
  {
    id: "multi-tenant-db-design",
    slug: "multi-tenant-db-design",
    title: "Designing a Multi-Tenant Database Schema in MySQL",
    date: "Jul 22, 2026",
    readTime: "7 min read",
    excerpt: "The architectural decisions behind building a scalable, isolated multi-tenant database for PGSphere using MySQL.",
    tags: ["Database", "MySQL", "Architecture"],
    content: `
# Designing a Multi-Tenant Database Schema

When building **PGSphere**, a platform where multiple PG (Paying Guest) owners manage their properties independently, the biggest architectural decision was the database design.

How do we isolate data so Owner A never sees Owner B's tenants, while keeping the application scalable?

There are three common approaches to Multi-Tenancy:
1. **Separate Databases**: Highest isolation, highest cost.
2. **Separate Schemas**: Good isolation, complex migrations.
3. **Shared Database, Shared Schema**: Lowest cost, highest risk of data leakage.

For PGSphere, I chose **Shared Database, Shared Schema**. Here's how I made it secure.

## The Tenant ID Pattern

Every table in the database that belongs to a tenant (e.g., \`rooms\`, \`tenants\`, \`payments\`) must have a \`tenant_id\` column.

\`\`\`sql
CREATE TABLE tenants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    room_id INT NOT NULL,
    FOREIGN KEY (tenant_id) REFERENCES owners(id)
);
\`\`\`

## Securing Data Access
The danger of this approach is forgetting to include \`WHERE tenant_id = ?\` in a query. To prevent this, I abstracted the database access layer in Node.js.

Instead of writing raw queries in controllers, I created a repository pattern that automatically injects the \`tenant_id\` from the authenticated user's context (parsed from their JWT).

\`\`\`javascript
class TenantRepository {
  constructor(db, tenantId) {
    this.db = db;
    this.tenantId = tenantId;
  }

  async findAll() {
    return this.db.query('SELECT * FROM tenants WHERE tenant_id = ?', [this.tenantId]);
  }
}
\`\`\`

## Indexing for Performance
Since millions of rows from different tenants share the same table, querying without proper indexes would lead to full table scans.

I created composite indexes on \`(tenant_id, id)\` for almost all tables. This ensures the database engine instantly filters down to the specific tenant's data partition before executing the rest of the query.

Building this taught me that software architecture is always about trade-offs. The shared schema gave us the velocity to launch quickly while keeping hosting costs near zero.
    `
  }
];
