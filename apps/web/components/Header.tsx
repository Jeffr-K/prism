/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { css } from '@emotion/react';
import { Bell, Settings, Search } from 'lucide-react';

const headerStyle = css`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
`;

const headerInner = css`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const headerContent = css`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
`;

const leftSection = css`
  display: flex;
  align-items: center;
`;

const logoLink = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
`;

const logoBox = css`
  width: 2rem;
  height: 2rem;
  background: #2563eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoText = css`
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;

const appName = css`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
`;

const centerSection = css`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const navLink = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #2563eb;
  }
`;

const searchSection = css`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 24rem;
  margin: 0 2rem;
`;

const searchContainer = css`
  position: relative;
  width: 100%;
`;

const searchInput = css`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: #f9fafb;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    background: white;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const searchIcon = css`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 1rem;
  height: 1rem;
`;

const rightSection = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const iconButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: transparent;
  border-radius: 0.5rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`;

const userAvatar = css`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #d1d5db;
  }
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      <div css={headerInner}>
        <div css={headerContent}>
          {/* 좌측: 로고, 앱이름 */}
          <div css={leftSection}>
            <Link href="/" css={logoLink}>
              <div css={logoBox}>
                <span css={logoText}>P</span>
              </div>
              <span css={appName}>Prism</span>
            </Link>
          </div>
          
          {/* 가운데: 채용관, 부트캠프, 대나무숲, 은두니, 이력서 */}
          <nav css={centerSection}>
            <Link href="/jobs" css={navLink}>
              채용관
            </Link>
            <Link href="/bootcamp" css={navLink}>
              부트캠프
            </Link>
            <Link href="/community" css={navLink}>
              대나무숲
            </Link>
            <Link href="/eunduni" css={navLink}>
              은두니
            </Link>
            <Link href="/resume" css={navLink}>
              이력서
            </Link>
          </nav>
          
          {/* 통합검색창 */}
          <div css={searchSection}>
            <div css={searchContainer}>
              <Search css={searchIcon} size={16} />
              <input
                type="text"
                placeholder="직무, 회사, 키워드를 검색해보세요"
                css={searchInput}
              />
            </div>
          </div>
          
          {/* 오른쪽: 알림창, 이미지, 설정아이콘 */}
          <div css={rightSection}>
            <button css={iconButton}>
              <Bell size={20} />
            </button>
            <div css={userAvatar}>
              사용자
            </div>
            <button css={iconButton}>
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}