import { HomeSection } from './Home/HomeSection'
import { BioSection } from './Bio/BioSection'
import { VoteSection } from './Vote/VoteSection'
import { PhiloSection } from './Philo/PhiloSection'
import { CurrentProblemsSection } from './Philo/CurrentProblemsSection'
import { PhiloPositionSection } from './Philo/PhiloPositionSection'
import { MySolutionSection } from './Philo/MySolutionSection'
import { CreditsSection } from './Credits/CreditsSection'

export function Section({ elementId, sectionTitle, variant }) {
  const section = getSection(elementId)

  if (variant == 'sub-section')
    return (
      <section id={elementId} className="pb-4">
        <div className="mb-2 section-title">
          <u>{sectionTitle}</u>
        </div>
        {section}
      </section>
    )

  return (
    <section id={elementId} className="pb-4">
      <div className="mb-2 section-title">
        <u>{sectionTitle}</u>
      </div>
      <div className="section-content">{section}</div>
    </section>
  )
}

function getSection(elementId) {
  switch (elementId) {
    case 'home': {
      return <HomeSection />
    }
    case 'bio': {
      return <BioSection />
    }
    case 'vote': {
      return <VoteSection />
    }
    case 'philo': {
      return <PhiloSection />
    }
    case 'current-problems': {
      return <CurrentProblemsSection />
    }
    case 'philo-position': {
      return <PhiloPositionSection />
    }
    case 'my-solution': {
      return <MySolutionSection />
    }
    case 'credit': {
      return <CreditsSection />
    }
    default: {
      return (
        <section id="error" className="danger text-danger">
          <h2>Error</h2>
          <p>An error has occurred. Please contact your local admin.</p>
        </section>
      )
    }
  }
}
