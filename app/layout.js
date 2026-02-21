// app/layout.js - Server Component
import { Cairo} from "next/font/google";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout";
import ThemeProvider from "@/components/common/theme-provider";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
});



export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable}  antialiased bg-gray-50`}
      >
        <ThemeProvider>
          {" "}
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
