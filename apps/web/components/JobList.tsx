/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { MapPin, Building, Clock, Filter, Eye, Send, ArrowLeft, ArrowRight } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  tags: string[];
  description: string;
  postedAt: string;
  isFavorite?: boolean;
  experience?: string;
  education?: string;
  views?: number;
  applicants?: number;
}

interface JobListProps {
  jobs?: Job[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onFavoriteToggle?: (jobId: string) => void;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: '프론트엔드 개발자 (React/Next.js)',
    company: '토스',
    location: '서울 강남구',
    salary: '5000-8000만원',
    type: '정규직',
    tags: ['React', 'TypeScript', 'Next.js', '경력 3-5년'],
    description: '사용자 중심의 혁신적인 금융 서비스를 개발하는 프론트엔드 개발자를 모집합니다.',
    postedAt: '2일 전',
    isFavorite: false,
    experience: '3-5년',
    education: '대졸',
    views: 1247,
    applicants: 89,
  },
  {
    id: '2',
    title: '백엔드 개발자 (Node.js/Python)',
    company: '네이버',
    location: '경기 성남시',
    salary: '4000-7000만원',
    type: '정규직',
    tags: ['Node.js', 'Python', 'AWS', '경력 2-4년'],
    description: '대규모 트래픽을 처리하는 백엔드 시스템을 개발하고 운영합니다.',
    postedAt: '1일 전',
    isFavorite: true,
    experience: '2-4년',
    education: '대졸',
    views: 2156,
    applicants: 156,
  },
  {
    id: '3',
    title: 'DevOps 엔지니어',
    company: '카카오',
    location: '서울 판교',
    salary: '6000-9000만원',
    type: '정규직',
    tags: ['Kubernetes', 'Docker', 'Jenkins', '경력 4-6년'],
    description: '안정적이고 확장 가능한 인프라 구축 및 운영을 담당합니다.',
    postedAt: '3일 전',
    isFavorite: false,
    experience: '4-6년',
    education: '대졸',
    views: 892,
    applicants: 67,
  },
  {
    id: '4',
    title: 'UX/UI 디자이너',
    company: '쿠팡',
    location: '서울 송파구',
    salary: '4500-6500만원',
    type: '정규직',
    tags: ['Figma', 'Sketch', 'Prototyping', '경력 2-4년'],
    description: '사용자 경험을 최우선으로 하는 디자인을 통해 서비스를 개선합니다.',
    postedAt: '4일 전',
    isFavorite: false,
    experience: '2-4년',
    education: '대졸',
    views: 1567,
    applicants: 234,
  },
  {
    id: '5',
    title: '데이터 사이언티스트',
    company: '삼성전자',
    location: '서울 강남구',
    salary: '5500-8500만원',
    type: '정규직',
    tags: ['Python', 'SQL', 'Machine Learning', '경력 3-5년'],
    description: '빅데이터 분석을 통해 비즈니스 인사이트를 도출하고 AI 모델을 개발합니다.',
    postedAt: '5일 전',
    isFavorite: true,
    experience: '3-5년',
    education: '석사',
    views: 3421,
    applicants: 445,
  },
];

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const titleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
`;

const countStyle = css`
  font-size: 0.875rem;
  color: #6b7280;
`;

const filterSection = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
`;

const filterButton = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #2563eb;
    color: #2563eb;
  }
`;

const sortSelect = css`
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

const jobGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const jobCard = css`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: all 0.2s;
  cursor: pointer;
  height: 360px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #2563eb;
    transform: translateY(-4px);
  }
`;

const jobHeader = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  position: relative;
`;

const jobInfo = css`
  flex: 1;
`;

const jobLabels = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const jobTitle = css`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const jobType = css`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const jobMeta = css`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const metaLeft = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

const metaRight = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  align-items: flex-start;
`;

const metaItem = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const techStack = css`
  margin-bottom: 0.75rem;
`;

const techGrid = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const techItem = css`
  padding: 0.25rem 0.5rem;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
`;

const jobTags = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
`;

const tag = css`
  padding: 0.125rem 0.5rem;
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.625rem;
  font-weight: 500;
`;

const jobFooter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const jobStats = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

const statItem = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const bottomActions = css`
  display: flex;
  gap: 0.5rem;
`;

const favoriteButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #fef2f2;
  }
`;

const applyButton = css`
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #1d4ed8;
  }
`;

const deadline = css`
  padding: 0.125rem 0.5rem;
  background: #fef3c7;
  color: #d97706;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

const recruitmentCount = css`
  padding: 0.125rem 0.5rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

const bookmarkButton = css`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(4px);
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const actionButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(4px);
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const paginationStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const pageButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  padding: 0;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #2563eb;
    color: #2563eb;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const activePageButton = css`
  background: #2563eb;
  color: white;
  border-color: #2563eb;
  
  &:hover {
    background: #1d4ed8;
  }
`;

export default function JobList({ 
  jobs = mockJobs, 
  currentPage = 1, 
  totalPages = 5, 
  onPageChange,
  onFavoriteToggle 
}: JobListProps) {
  const router = useRouter();

  const [sortBy, setSortBy] = useState('latest');

  const handleCardClick = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  const handleApplyClick = (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation();
    router.push(`/jobs/${jobId}/apply`);
  };

  const sortedJobs = [...jobs].sort((a, b) => {
    switch (sortBy) {
      case 'salary':
        const aSalary = parseInt(a.salary.split('-')[0] || '0');
        const bSalary = parseInt(b.salary.split('-')[0] || '0');
        return bSalary - aSalary;
      case 'popular':
        return (b.views || 0) - (a.views || 0);
      case 'latest':
      default:
        return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
    }
  });

  return (
    <div css={containerStyle}>
      <div css={headerStyle}>
        <h2 css={titleStyle}>채용 정보</h2>
        <p css={countStyle}>{jobs.length}개의 채용 정보</p>
      </div>

      <div css={filterSection}>
        <button css={filterButton}>
          <Filter size={16} />
          필터
        </button>
        <select 
          css={sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="latest">최신순</option>
          <option value="salary">연봉순</option>
          <option value="popular">인기순</option>
        </select>
      </div>

      <div css={jobGrid}>
        {sortedJobs.map((job) => (
          <div key={job.id} css={jobCard} onClick={() => handleCardClick(job.id)}>
            <div css={jobHeader}>
              <div css={jobInfo}>
                <div css={jobLabels}>
                  <span css={jobType}>{job.type}</span>
                  <span css={deadline}>D-17</span>
                  <span css={recruitmentCount}>채용 7명</span>
                </div>
                
                <div css={jobTitle}>
                  {job.title}
                </div>
                
                <div css={jobMeta}>
                  <div css={metaLeft}>
                    <div css={metaItem}>
                      <Building size={16} />
                      {job.company}
                    </div>
                    <div css={metaItem}>
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div css={metaItem}>
                      <Clock size={16} />
                      {job.postedAt}
                    </div>
                  </div>
                  <div css={metaRight}>
                    <div css={metaItem}>
                      <Eye size={16} />
                      {job.views || 0}
                    </div>
                    <div css={metaItem}>
                      <Send size={16} />
                      {job.applicants || 0}
                    </div>
                  </div>
                </div>
              </div>
              

            </div>

            <div css={techStack}>
              <div css={techGrid}>
                {job.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} css={techItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div css={jobFooter}>
              <div css={bottomActions}>
                <button css={applyButton} onClick={(e) => handleApplyClick(e, job.id)}>
                  지원하기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div css={paginationStyle}>
        <button
          css={pageButton}
          disabled={currentPage === 1}
          onClick={() => onPageChange?.(currentPage - 1)}
        >
          <ArrowLeft size={18} />
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            css={page === currentPage ? activePageButton : pageButton}
            onClick={() => onPageChange?.(page)}
          >
            {page}
          </button>
        ))}
        
        <button
          css={pageButton}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}