/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { css } from '@emotion/react';
import { Bell, Settings, Search } from 'lucide-react';
import { useState } from 'react';

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
  gap: 2rem;
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
  gap: 1.5rem;
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

const searchContainer = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
`;

const searchInput = css`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  width: 200px;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const searchButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #1d4ed8;
  }
`;

const abroadsBadge = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: #8b5cf6;
  color: white;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: bounce 2s infinite;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-3px);
    }
    60% {
      transform: translateY(-2px);
    }
  }
`;

const pulseAnimation = css`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    background: rgba(139, 92, 246, 0.3);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;

export default function Header() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      // 검색 로직 구현
      console.log('Search:', searchKeyword);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header css={headerStyle}>
      <div css={headerInner}>
        <div css={headerContent}>
          <div css={leftSection}>
            <Link href="/" css={logoLink}>
              <div css={logoBox}>
                <span css={logoText}>P</span>
              </div>
              <span css={appName}>Prism</span>
            </Link>
            <nav css={centerSection}>
              <Link href="/jobs" css={navLink}>채용관</Link>
              <Link href="/bootcamp" css={navLink}>부트캠프</Link>
              <Link href="/community" css={navLink}>대나무숲</Link>
              <Link href="/eunduni" css={navLink}>은두니</Link>
              <Link href="/resume" css={navLink}>이력서</Link>
              <Link href="/ara" css={navLink}>아라보기</Link>
              <div css={searchContainer}>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  css={searchInput}
                />
                <button onClick={handleSearch} css={searchButton}>
                  <Search size={16} />
                </button>
                <div css={[abroadsBadge, pulseAnimation]}>
                  Abroads
                </div>
              </div>
            </nav>
          </div>
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