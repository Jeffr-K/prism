'use client';

import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
          background: #f8fafc;
          color: #222;
        }
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
      `}
    />
  );
} 