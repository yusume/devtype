import "../styles/globals.css";

export const metadata = {
  title: "DevType",
  description: "당신은 어떤 개발자입니까?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}