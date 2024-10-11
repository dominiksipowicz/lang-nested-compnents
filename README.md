# Dynamic Segments in Next.js App Router with Nested Server Components

> How can I get Dynamic Segment value in nested Server Component?

> How do I access [lang] prop in nested Server Component?

> What is the best practice for handling locale value (i18n) for e-commerce website?

This project demonstrates how to access Dynamic Segments in Next.js App Router, specifically focusing on Server Components and their nested children. The primary use case explored here is retrieving the `[lang]` parameter from the URL in deeply nested routes and components without resorting to prop drilling.

## What are Dynamic Segments?

Dynamic Segments in Next.js allow you to create dynamic routes that can capture values from the URL. For a comprehensive explanation, refer to the [Next.js documentation on Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#convention).

## The Challenge

In a typical Next.js application using the App Router, you might have a structure like this:

```
/app
  /[lang]
    /page.tsx
```

## Potential other Solutions

1. prop drilling (correct, simple and recommended solution)
2. using `useRouter` hooks, however this is client side only.
3. Using Context Providers as Client Components, and pass it in Server Components, and then access it in nested Server Components. However this create a lot of RSC paylods between Client Components and Server Components. Also not ideal for initial HTML document render.
4. using `cache` from React to store the lang value, and then access it in nested Server Components. (THIS EXAMPLE)
5. using `AsyncLocalStorage`, bascially async local storage for server node.js environment and normal in memory or local storage for browser

## Using simple object withouth cache wrap to store the lang

There are some potential issues with the simple object approach. By using single object (similar to singleton), it will have same instance in memory for the duration of the application lifecycle. On serverless environment, it might work fine, however on serverful environment, it might have some issues with concurrency.
