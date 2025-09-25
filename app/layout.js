export const metadata = {
  title: 'The 10 Rules for a Writing Life - J. David Stem',
  description: 'Stop rewriting the same script. Start building a writing career.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
