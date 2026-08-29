import { RouterProvider } from 'react-router';
import { LanguageProvider } from './i18n/context';
import { router } from './app/routes';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
