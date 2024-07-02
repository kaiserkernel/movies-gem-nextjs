import React from 'react'
import styled from 'styled-components'
import Providers from '../Providers'
import DesktopMovieInfos from './DesktopMovieInfos'
import Cast from '../Cast'
import Typography from 'components/Typography'
import { useTranslation } from 'next-i18next'
import { Recommendations } from './Recommendations'

const Wrapper = styled.div`
  grid-template-columns: repeat(12, 1fr);
  display: grid;
`

const RightSection = styled.div`
  grid-column: 3 / -1;
  padding-bottom: 70px;
`

const StyledProviders = styled(Providers)`
  background-color: var(--providers-bg-color);
`

const SectionTitle = ({ children }) => {
  return (
    <Typography
      as="h2"
      variant="typo3"
      className="uppercase mb-4"
      style={{ color: 'var(--cast-section-title-desktop)' }}
    >
      {children}
    </Typography>
  )
}

const DesktopLayout = ({ hit }) => {
  const { t } = useTranslation('common')
  const { cast = [], providers = {}, ...movie } = hit
  return (
    <Wrapper>
      <StyledProviders providers={providers} />
      <RightSection>
        <DesktopMovieInfos movie={movie} />
        <div className="px-14 py-12">
          <SectionTitle>{t('cast')}</SectionTitle>
          <Cast className="mt-4" cast={cast} />
          <SectionTitle>{t('similar.heading')}</SectionTitle>
          <Typography>
            {t('similar.description', { title: movie.title })}
          </Typography>
          <Recommendations className="mt-4" movies={[movie]} />
        </div>
      </RightSection>
    </Wrapper>
  )
}

export default DesktopLayout
