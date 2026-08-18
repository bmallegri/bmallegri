import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Seal } from "@/components/site/Seal";
import { Cursor } from "@/components/site/Cursor";
import { Preloader } from "@/components/site/Preloader";
import { SmoothScroll } from "@/components/site/SmoothScroll";

function NotFoundComponent() {
  return (
    <main className="min-h-screen bg-base text-ink">
      <div className="mx-auto max-w-[1080px] px-6 section-pad">
        <Seal className="mb-8 h-14 w-14" />
        <h1 className="t-section">Nothing here.</h1>
        <p className="mt-4 t-mono opacity-70">The drone doesn't go this high.</p>
        <p className="mt-8 t-mono">
          <Link to="/" className="link-accent">
            Back to the front page.
          </Link>
        </p>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="min-h-screen bg-base text-ink">
      <div className="mx-auto max-w-[1080px] px-6 section-pad">
        <h1 className="t-section">Nothing here.</h1>
        <p className="mt-8 t-mono">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="link-accent"
          >
            Back to the front page.
          </button>
        </p>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Bella Michele Allegri" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bella Michele Allegri" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#ECEBE7" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..600,0..100,0..1&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://bmallegri.ai/#organization",
              name: "Bella Michele Allegri",
              alternateName: "BMAllegri",
              url: "https://bmallegri.ai",
              logo: {
                "@type": "ImageObject",
                "@id": "https://bmallegri.ai/#logo",
                url: "https://bmallegri.ai/logo.png",
                contentUrl: "https://bmallegri.ai/logo.png",
                width: 1200,
                height: 1200,
                caption: "BMAllegri seal logo",
              },
              image: { "@id": "https://bmallegri.ai/#logo" },
              email: "mailto:bellamallegri@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/bellamallegri",
                "https://github.com/bmallegri",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://bmallegri.ai/#website",
              url: "https://bmallegri.ai",
              name: "Bella Michele Allegri",
              inLanguage: "en",
              publisher: { "@id": "https://bmallegri.ai/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var m=document.querySelector('meta[name=theme-color]');if(!m){m=document.createElement('meta');m.name='theme-color';document.head.appendChild(m);}m.setAttribute('content',d?'#111317':'#ECEBE7');}catch(e){}})();`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Cursor />
      <SmoothScroll />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
