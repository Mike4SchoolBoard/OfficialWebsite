import { Section } from '../Section'

export function PhiloSection() {
  return (
    <>
      <p className="mb-2">
        I raised 5 children in the Prince William County Public School system and have witnessed the decline in the quality of the education during
        our 23 years in Prince William. As the public schools have been the fodder of increased politicization, the quality of the education system
        has faltered. This has gone on in Prince William County as well and has gone on far too long.
      </p>
      <Section elementId={'current-problems'} sectionTitle={'Current Problems'} variant="sub-section" />
      <Section elementId="philo-position" sectionTitle="My Philosophy" variant="sub-section" />
      <Section elementId="my-solution" sectionTitle="My Solution" variant="sub-section" />
      <p>
        <span>If you support my position, please vote for me on November 7. </span>
        <span>
          Help support my message by clicking <a href="https://www.google.com">Donate</a>.
        </span>
      </p>
    </>
  )
}
