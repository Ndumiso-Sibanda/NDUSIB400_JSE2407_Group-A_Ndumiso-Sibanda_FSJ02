import "./globals.css";

export const metadata = {
  title: 'Next.js E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 ">
        <header className="bg-gray-200 shadow-p4">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Tumu/Foundation</h1>
          </div>
        </header>
        <main className="container mx-auto flex-1 mt-8 p-4">{children}</main>
      </body>
    </html>
  );
}
