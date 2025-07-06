/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Building, MapPin, Clock, DollarSign, Users, Calendar, BookOpen, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import React, { use } from 'react';

// JobList에서 사용하는 mock 데이터
const mockJobs = [
  {
    id: '1',
    title: '프론트엔드 개발자 (React/TypeScript)',
    company: '카카오',
    location: '서울 판교',
    salary: '4,000-6,000만원',
    type: '정규직',
    tags: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    description: '카카오에서 프론트엔드 개발자를 모집합니다. React와 TypeScript를 주로 사용하며, 사용자 경험을 중시하는 개발자를 찾고 있습니다.',
    postedAt: '3일 전',
    experience: '3년 이상',
    education: '학사 이상',
    views: 892,
    applicants: 343,
    deadline: '2024-02-15',
    recruitmentCount: 7,
    requirements: [
      'React, TypeScript, JavaScript에 대한 깊은 이해',
      '웹 표준과 접근성에 대한 이해',
      '성능 최적화 경험',
      'Git을 활용한 협업 경험'
    ],
    benefits: [
      '유연한 근무 환경',
      '연봉 협상 가능',
      '교육비 지원',
      '건강보험 및 각종 보험',
      '식대 지원',
      '교통비 지원'
    ],
    workEnvironment: [
      '주 5일 근무 (월-금)',
      '오전 9시 - 오후 6시',
      '재택근무 가능',
      '유연근무제'
    ]
  },
  {
    id: '2',
    title: '백엔드 개발자 (Node.js/Express)',
    company: '쿠팡',
    location: '서울 송파구',
    salary: '3,500-5,500만원',
    type: '정규직',
    tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    description: '쿠팡에서 백엔드 개발자를 모집합니다. 대용량 트래픽을 처리할 수 있는 시스템 개발 경험이 있는 개발자를 찾고 있습니다.',
    postedAt: '5일 전',
    experience: '2년 이상',
    education: '학사 이상',
    views: 654,
    applicants: 234,
    deadline: '2024-02-20',
    recruitmentCount: 5,
    requirements: [
      'Node.js, Express 프레임워크 경험',
      'MongoDB, Redis 등 NoSQL 데이터베이스 경험',
      'RESTful API 설계 및 개발 경험',
      'AWS 클라우드 서비스 경험'
    ],
    benefits: [
      '경쟁력 있는 연봉',
      '스톡옵션 제공',
      '무료 점심/저녁',
      '건강검진 지원',
      '교육비 지원'
    ],
    workEnvironment: [
      '주 5일 근무',
      '오전 10시 - 오후 7시',
      '재택근무 3일/주',
      '자유로운 휴가 사용'
    ]
  }
];

const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const backButton = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 2rem;
  
  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }
`;

const headerSection = css`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const jobTitle = css`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const companyInfo = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const companyName = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
`;

const jobType = css`
  padding: 0.25rem 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const metaGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const metaItem = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const statsRow = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const statItem = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const contentGrid = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const mainContent = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const section = css`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const sectionTitle = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const description = css`
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const techStack = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const techItem = css`
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
`;

const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const listItem = css`
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
  color: #374151;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: '•';
    color: #2563eb;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const sidebar = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const applyCard = css`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
`;

const applyButton = css`
  width: 100%;
  padding: 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1rem;
  
  &:hover {
    background: #1d4ed8;
  }
`;

const deadlineInfo = css`
  text-align: center;
  padding: 1rem;
  background: #fef3c7;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const deadlineText = css`
  color: #d97706;
  font-weight: 600;
  font-size: 0.875rem;
`;

const recruitmentInfo = css`
  text-align: center;
  padding: 1rem;
  background: #dbeafe;
  border-radius: 0.5rem;
`;

const recruitmentText = css`
  color: #1e40af;
  font-weight: 600;
  font-size: 0.875rem;
`;

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const job = mockJobs.find(job => job.id === id);

  if (!job) {
    return (
      <>
        <Header />
        <div css={containerStyle}>
          <button css={backButton} onClick={() => router.back()}>
            <ArrowLeft size={16} />
            뒤로가기
          </button>
          <div css={headerSection}>
            <h1>채용 정보를 찾을 수 없습니다.</h1>
          </div>
        </div>
      </>
    );
  }

  const handleApply = () => {
    router.push(`/jobs/${job.id}/apply`);
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <button css={backButton} onClick={() => router.back()}>
          <ArrowLeft size={16} />
          뒤로가기
        </button>

      <div css={headerSection}>
        <h1 css={jobTitle}>{job.title}</h1>
        
        <div css={companyInfo}>
          <span css={companyName}>{job.company}</span>
          <span css={jobType}>{job.type}</span>
        </div>

        <div css={metaGrid}>
          <div css={metaItem}>
            <MapPin size={16} />
            {job.location}
          </div>
          <div css={metaItem}>
            <DollarSign size={16} />
            {job.salary}
          </div>
          <div css={metaItem}>
            <Clock size={16} />
            {job.postedAt}
          </div>
          <div css={metaItem}>
            <Briefcase size={16} />
            경력 {job.experience}
          </div>
          <div css={metaItem}>
            <BookOpen size={16} />
            {job.education}
          </div>
        </div>

        <div css={statsRow}>
          <div css={statItem}>
            <Users size={16} />
            조회 {job.views?.toLocaleString()}
          </div>
          <div css={statItem}>
            <Calendar size={16} />
            지원 {job.applicants}
          </div>
        </div>
      </div>

      <div css={contentGrid}>
        <div css={mainContent}>
          <div css={section}>
            <h2 css={sectionTitle}>주요 기술 스택</h2>
            <div css={techStack}>
              {job.tags.map((tag, index) => (
                <span key={index} css={techItem}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div css={section}>
            <h2 css={sectionTitle}>채용 내용</h2>
            <p css={description}>{job.description}</p>
          </div>

          <div css={section}>
            <h2 css={sectionTitle}>자격 요건</h2>
            <ul css={list}>
              {job.requirements.map((req, index) => (
                <li key={index} css={listItem}>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div css={section}>
            <h2 css={sectionTitle}>복리후생</h2>
            <ul css={list}>
              {job.benefits.map((benefit, index) => (
                <li key={index} css={listItem}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div css={section}>
            <h2 css={sectionTitle}>근무 환경</h2>
            <ul css={list}>
              {job.workEnvironment.map((env, index) => (
                <li key={index} css={listItem}>
                  {env}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div css={sidebar}>
          <div css={applyCard}>
            <button css={applyButton} onClick={handleApply}>
              지원하기
            </button>
            
            <div css={deadlineInfo}>
              <div css={deadlineText}>지원 마감일</div>
              <div css={deadlineText}>{job.deadline}</div>
            </div>
            
            <div css={recruitmentInfo}>
              <div css={recruitmentText}>채용 인원</div>
              <div css={recruitmentText}>{job.recruitmentCount}명</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
} 