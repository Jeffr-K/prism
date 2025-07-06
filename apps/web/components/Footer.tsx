/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { css } from '@emotion/react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerStyle = css`
  background: #111827;
  color: white;
  padding: 3rem 0 2rem;
`;

const footerInner = css`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const footerContent = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
  }
`;

const brandSection = css`
  @media (min-width: 768px) {
    grid-column: span 1;
  }
`;

const brandHeader = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
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

const brandName = css`
  font-size: 1.25rem;
  font-weight: bold;
`;

const brandDescription = css`
  color: #9ca3af;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 24rem;
`;

const socialLinks = css`
  display: flex;
  gap: 1rem;
`;

const socialLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #374151;
  border-radius: 0.5rem;
  color: #9ca3af;
  transition: all 0.2s;
  
  &:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-2px);
  }
`;

const footerSection = css`
  display: flex;
  flex-direction: column;
`;

const sectionTitle = css`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const linkList = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const footerLink = css`
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const contactInfo = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const contactItem = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
`;

const footerBottom = css`
  padding-top: 2rem;
  border-top: 1px solid #374151;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const copyright = css`
  color: #9ca3af;
  font-size: 0.875rem;
`;

const companyInfo = css`
  color: #9ca3af;
  font-size: 0.875rem;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={footerInner}>
        <div css={footerContent}>
          <div css={brandSection}>
            <div css={brandHeader}>
              <div css={logoBox}>
                <span css={logoText}>P</span>
              </div>
              <span css={brandName}>Prism</span>
            </div>
            <p css={brandDescription}>
              최고의 인재와 기업을 연결하는 채용 플랫폼입니다. 
              당신의 꿈을 실현할 수 있는 기회를 찾아보세요.
            </p>
            <div css={socialLinks}>
              <Link href="#" css={socialLink}>
                <Facebook size={18} />
              </Link>
              <Link href="#" css={socialLink}>
                <Twitter size={18} />
              </Link>
              <Link href="#" css={socialLink}>
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
          
          <div css={footerSection}>
            <h3 css={sectionTitle}>서비스</h3>
            <ul css={linkList}>
              <li>
                <Link href="/jobs" css={footerLink}>
                  채용정보
                </Link>
              </li>
              <li>
                <Link href="/companies" css={footerLink}>
                  기업정보
                </Link>
              </li>
              <li>
                <Link href="/careers" css={footerLink}>
                  커리어 가이드
                </Link>
              </li>
              <li>
                <Link href="/salary" css={footerLink}>
                  연봉정보
                </Link>
              </li>
              <li>
                <Link href="/bootcamp" css={footerLink}>
                  부트캠프
                </Link>
              </li>
            </ul>
          </div>
          
          <div css={footerSection}>
            <h3 css={sectionTitle}>고객지원</h3>
            <ul css={linkList}>
              <li>
                <Link href="/help" css={footerLink}>
                  도움말
                </Link>
              </li>
              <li>
                <Link href="/contact" css={footerLink}>
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/privacy" css={footerLink}>
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" css={footerLink}>
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          <div css={footerSection}>
            <h3 css={sectionTitle}>연락처</h3>
            <div css={contactInfo}>
              <div css={contactItem}>
                <Mail size={16} />
                support@prism.com
              </div>
              <div css={contactItem}>
                <Phone size={16} />
                02-1234-5678
              </div>
              <div css={contactItem}>
                <MapPin size={16} />
                서울시 강남구 테헤란로 123
              </div>
            </div>
          </div>
        </div>
        
        <div css={footerBottom}>
          <p css={copyright}>
            © 2024 Prism. All rights reserved.
          </p>
          <div css={companyInfo}>
            대표: 홍길동 | 사업자등록번호: 123-45-67890 | 통신판매신고: 제2024-서울강남-1234호
          </div>
        </div>
      </div>
    </footer>
  );
}