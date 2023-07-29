import "../../assets/main.css";

export const metadata = {
  title: "Ahmed Mohamed | Software Engineer",
  description: "Ahmed Mohamed's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
