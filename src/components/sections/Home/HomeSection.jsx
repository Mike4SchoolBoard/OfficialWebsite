import { useWindowSize } from '../../../hooks/useWindowSize'
import { ImageCard } from './ImageCard'

export function HomeSection() {
  const size = useWindowSize()
  if (size.width < 780)
    return (
      <div className="d-flex flex-column align-items-center section-container">
        <ImageCard src="src/images/pic.png" width={size.width} />
        <div>
          <h3>Fighting for parents' rights!</h3>
          <p>
            Today's public education is under attack from special interest groups from all points of the political spectrum. Parents are being told to
            support a system that they feel is endangering their children's future. There is a social war going on and the collateral damage is your
            kids. This damage is visible not only in the decreasing quality of the educational outcomes but also in the mental health of our students.
            This has to stop! New leadership is needed and needed soon to restore our education system to the quality that our students require, and
            that parents expect. My name is Mike Petko. I'm a parent and a grandfather, and I'm running for school board to represent YOU, the parents
            of the Neabsco district of Prince William County.
          </p>
        </div>
      </div>
    )
  return (
    <div className="d-flex justify-content-evenly">
      <ImageCard src="src/images/pic.png" width={size.width} />
      <div className="d-flex flex-column justify-content-evenly align-items-center w-100 section-container ms-5">
        <div>
          <h3 className="mb-2">Fighting for parents' rights!</h3>
          <p>
            Today's public education is under attack from special interest groups from all points of the political spectrum. Parents are being told to
            support a system that they feel is endangering their children's future. There is a social war going on and the collateral damage is your
            kids. This damage is visible not only in the decreasing quality of the educational outcomes but also in the mental health of our students.
            This has to stop! New leadership is needed and needed soon to restore our education system to the quality that our students require, and
            that parents expect. I'm a parent and a grandfather, and I'm running for school board to represent YOU, the parents of the Neabsco
            district of Prince William County. My name is Mike Petko and I approve this message.
          </p>
        </div>
      </div>
    </div>
  )
}
