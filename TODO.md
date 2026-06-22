# Project TODOs & Future Enhancements

- [ ] **Search Feature**: Implement a static search solution (e.g., Pagefind or a custom client-side fuzzy search) so users can easily find specific blog posts, learning modules, and activities as the content grows.
- [ ] **Dynamic Pagination**: Add pagination (e.g., `/blog/1`, `/blog/2` or a "Load More" button) to the Blog and Activities listing pages. Loading all articles on a single page will hurt performance once there are dozens of posts.
- [ ] **SEO & Open Graph (Social Sharing)**: Configure dynamic Open Graph (OG) tags and metadata so that sharing an article link on WhatsApp, Instagram, or Twitter automatically generates the correct title and custom thumbnail, rather than a default image.
- [ ] **Update Footer Links**: 
  - Replace the empty `#` placeholders for the Instagram, YouTube, and TikTok icons with actual CE social media URLs.
  - Update the navigation links in the footer (e.g., from `/#about` to `/about` and `/#pengurus` to `/pengurus`) to correctly point to the newly created standalone pages.
- [ ] **RSS Feed**: Generate an Astro RSS feed (`rss.xml`) for the blog and activities. This allows users to subscribe via news readers and enables automated publishing to bots like Telegram or Discord.
