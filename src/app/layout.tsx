import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='h-screen'>
        <header>
          <h1 className='sr-only'>Newsletter SignUp</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
