'use client'
import './globals.css'
import Navigation from './navigation'
import styles from './page.module.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://shift-backend.onrender.com/graphql",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <ApolloProvider client={client}>
      <body >
        <div className={styles.nav_container}>
          <Navigation />
        </div>
        {children}</body>
        </ApolloProvider>
    </html>
  )
}
