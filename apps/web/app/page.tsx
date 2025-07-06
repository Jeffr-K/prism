/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import JobList from '@/components/JobList';
import Footer from '@/components/Footer';

interface SearchFilters {
  keyword: string;
  location: string;
  jobCategory: string;
  salary: string;
  experience: string;
  education: string;
  employmentType: string;
}

const containerStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const mainStyle = css`
  flex: 1;
`;

const heroSection = css`
  background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
  padding: 4rem 0;
`;

const heroInner = css`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const heroText = css`
  text-align: center;
  margin-bottom: 2rem;
`;

const heroTitle = css`
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const highlight = css`
  color: #2563eb;
`;

const heroDesc = css`
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const searchSection = css`
  padding: 2rem 0;
  background: #f8fafc;
`;

const sectionStyle = css`
  padding: 4rem 0;
  background: #fff;
`;

const sectionInner = css`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;



export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (filters: SearchFilters) => {
    setCurrentPage(1);
    console.log('Search filters:', filters);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFavoriteToggle = (jobId: string) => {
    console.log('Favorite toggled for job:', jobId);
  };

  return (
    <div css={containerStyle}>
      <Header />
      <main css={mainStyle}>
        <section css={heroSection}>
          <div css={heroInner}>
            <div css={heroText}>
              <h1 css={heroTitle}>
                당신의 꿈을 <span css={highlight}>실현</span>하세요
              </h1>
              <p css={heroDesc}>
                Prism에서 최고의 기회를 찾고, 당신의 역량을 마음껏 발휘하세요.
              </p>
            </div>
          </div>
        </section>

        <section css={searchSection}>
          <div css={sectionInner}>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        <section css={sectionStyle}>
          <div css={sectionInner}>
            <JobList 
              currentPage={currentPage}
              totalPages={5}
              onPageChange={handlePageChange}
              onFavoriteToggle={handleFavoriteToggle}
            />
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}
