import { Feed } from "feed";
import fs from "fs";

const feed = new Feed({
  title: "My Website",
  description: "Latest updates from my site",
  id: "https://yourdomain.com/",
  link: "https://yourdomain.com/",
  language: "en",
  updated: new Date(),
});

const posts = [
  { title: "Post 1", id: "1", link: "/post-1", date: new Date() },
  { title: "Post 2", id: "2", link: "/post-2", date: new Date() },
];

// Add posts to the feed
posts.forEach(post => {
  feed.addItem({
    title: post.title,
    id: post.id,
    link: `https://yourdomain.com${post.link}`,
    date: post.date,
  });
});

// Write the feed to public folder
fs.writeFileSync("public/atom.xml", feed.atom1());
console.log("Atom feed generated!");
