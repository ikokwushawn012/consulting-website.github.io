
import Sitemap from 'react-router-sitemap';

const routes = [
  '/',                 
  '/about',     
  '/alumni',
  '/cap',
  '/events',
  '/impact',
  '/sap',
  '/services',
  '/team',
  '/past-engagements'
];

function generateSitemap() {
  new Sitemap(routes)
    .build('https://consulting-website-github-io.vercel.app')
    .save('./public/sitemap.xml');   // saves inside public
}

generateSitemap();



