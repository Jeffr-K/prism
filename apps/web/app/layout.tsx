import type { Metadata } from "next";
import GlobalStyles from "@/components/GlobalStyles";

export const metadata: Metadata = {
  title: "Prism - 최고의 채용 플랫폼",
  description: "최고의 인재와 기업을 연결하는 채용 플랫폼입니다. 당신의 꿈을 실현할 수 있는 기회를 찾아보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
