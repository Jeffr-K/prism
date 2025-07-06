/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';
import { css } from '@emotion/react';
import { Search, MapPin, Briefcase, DollarSign, GraduationCap, Clock } from 'lucide-react';

interface SearchFilters {
  keyword: string;
  location: string;
  jobCategory: string;
  salary: string;
  experience: string;
  education: string;
  employmentType: string;
}

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

const searchContainer = css`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-top: -2rem;
  position: relative;
  z-index: 10;
`;

const searchTitle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const searchForm = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const mainSearchRow = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const searchInputContainer = css`
  position: relative;
  flex: 1;
`;

const searchInput = css`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
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
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  width: 1.25rem;
  height: 1.25rem;
`;

const searchButton = css`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
`;

const filtersRow = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const filterGroup = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const filterLabel = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const filterSelect = css`
  padding: 0.75rem 2rem 0.75rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

const popularKeywords = css`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const keywordsTitle = css`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
`;

const keywordsList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const keywordButton = css`
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
  }
`;

const statsInfo = css`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    keyword: '',
    location: '',
    jobCategory: '',
    salary: '',
    experience: '',
    education: '',
    employmentType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(filters);
    }
  };

  const handleKeywordClick = (keyword: string) => {
    setFilters(prev => ({ ...prev, keyword }));
  };

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div css={searchContainer}>
      <h2 css={searchTitle}>240만 실업자를 위한 맞춤 채용 검색</h2>
      
      <form onSubmit={handleSubmit} css={searchForm}>
        <div css={mainSearchRow}>
          <div css={searchInputContainer}>
            <Search css={searchIcon} size={20} />
            <input
              type="text"
              placeholder="원하는 직무, 회사, 키워드를 검색해보세요"
              value={filters.keyword}
              onChange={(e) => handleInputChange('keyword', e.target.value)}
              css={searchInput}
            />
          </div>
          <button type="submit" css={searchButton}>
            검색하기
          </button>
        </div>

        <div css={filtersRow}>
          <div css={filterGroup}>
            <label css={filterLabel}>
              <MapPin size={16} />
              지역
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              css={filterSelect}
            >
              <option value="">전체 지역</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="인천">인천</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
              <option value="광주">광주</option>
              <option value="대전">대전</option>
              <option value="울산">울산</option>
              <option value="세종">세종</option>
              <option value="강원">강원</option>
              <option value="충북">충북</option>
              <option value="충남">충남</option>
              <option value="전북">전북</option>
              <option value="전남">전남</option>
              <option value="경북">경북</option>
              <option value="경남">경남</option>
              <option value="제주">제주</option>
              <option value="원격">원격/재택</option>
            </select>
          </div>

          <div css={filterGroup}>
            <label css={filterLabel}>
              <Briefcase size={16} />
              직무 분야
            </label>
            <select
              value={filters.jobCategory}
              onChange={(e) => handleInputChange('jobCategory', e.target.value)}
              css={filterSelect}
            >
              <option value="">전체 직무</option>
              <option value="개발">개발</option>
              <option value="디자인">디자인</option>
              <option value="기획">기획</option>
              <option value="마케팅">마케팅</option>
              <option value="영업">영업</option>
              <option value="운영">운영</option>
              <option value="고객지원">고객지원</option>
              <option value="인사">인사</option>
              <option value="재무">재무</option>
              <option value="법무">법무</option>
              <option value="연구개발">연구개발</option>
              <option value="생산">생산</option>
              <option value="품질관리">품질관리</option>
              <option value="구매">구매</option>
              <option value="물류">물류</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div css={filterGroup}>
            <label css={filterLabel}>
              <DollarSign size={16} />
              연봉
            </label>
            <select
              value={filters.salary}
              onChange={(e) => handleInputChange('salary', e.target.value)}
              css={filterSelect}
            >
              <option value="">전체</option>
              <option value="2000-3000">2,000만원 ~ 3,000만원</option>
              <option value="3000-4000">3,000만원 ~ 4,000만원</option>
              <option value="4000-5000">4,000만원 ~ 5,000만원</option>
              <option value="5000-6000">5,000만원 ~ 6,000만원</option>
              <option value="6000-7000">6,000만원 ~ 7,000만원</option>
              <option value="7000-8000">7,000만원 ~ 8,000만원</option>
              <option value="8000+">8,000만원 이상</option>
              <option value="negotiable">협의</option>
            </select>
          </div>

          <div css={filterGroup}>
            <label css={filterLabel}>
              <Clock size={16} />
              경력
            </label>
            <select
              value={filters.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              css={filterSelect}
            >
              <option value="">전체</option>
              <option value="신입">신입</option>
              <option value="1-3">1-3년</option>
              <option value="3-5">3-5년</option>
              <option value="5-7">5-7년</option>
              <option value="7-10">7-10년</option>
              <option value="10+">10년 이상</option>
            </select>
          </div>

          <div css={filterGroup}>
            <label css={filterLabel}>
              <GraduationCap size={16} />
              학력
            </label>
            <select
              value={filters.education}
              onChange={(e) => handleInputChange('education', e.target.value)}
              css={filterSelect}
            >
              <option value="">전체</option>
              <option value="고졸">고졸</option>
              <option value="전문대">전문대</option>
              <option value="대졸">대졸</option>
              <option value="석사">석사</option>
              <option value="박사">박사</option>
              <option value="학력무관">학력무관</option>
            </select>
          </div>

          <div css={filterGroup}>
            <label css={filterLabel}>
              <Briefcase size={16} />
              고용형태
            </label>
            <select
              value={filters.employmentType}
              onChange={(e) => handleInputChange('employmentType', e.target.value)}
              css={filterSelect}
            >
              <option value="">전체</option>
              <option value="정규직">정규직</option>
              <option value="계약직">계약직</option>
              <option value="인턴">인턴</option>
              <option value="프리랜서">프리랜서</option>
              <option value="파트타임">파트타임</option>
              <option value="아르바이트">아르바이트</option>
            </select>
          </div>
        </div>
      </form>

      <div css={popularKeywords}>
        <div css={keywordsTitle}>🔥 인기 검색어</div>
        <div css={keywordsList}>
          {['프론트엔드 개발자', '백엔드 개발자', '데이터 분석가', 'UI/UX 디자이너', '프로덕트 매니저', '마케팅 매니저', '영업 대표', '고객 성공 매니저'].map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              css={keywordButton}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      <div css={statsInfo}>
        💡 현재 240만명의 구직자가 Prism에서 새로운 기회를 찾고 있습니다
      </div>
    </div>
  );
}