import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import WebDev from '../pages/WebDev';
import SocialMedia from '../pages/SocialMedia';
import SEO from '../pages/SEO';
import Portfolio from '../pages/Portfolio';
import Pricing from '../pages/Pricing';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'services/web-development', Component: WebDev },
      { path: 'services/social-media', Component: SocialMedia },
      { path: 'services/seo', Component: SEO },
      { path: 'portfolio', Component: Portfolio },
      { path: 'pricing', Component: Pricing },
      { path: 'faq', Component: FAQ },
      { path: 'contact', Component: Contact },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: '*', Component: NotFound },
    ],
  },
]);
