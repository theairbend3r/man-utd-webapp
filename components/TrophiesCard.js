import tw from "twin.macro"
import { css } from "@emotion/core"

const TrophiesCard = props => {
  const trophyImage = props.trophyImage
  const trophyCount = props.trophyCount
  const trophyName = props.trophyName

  return (
    <div tw="flex flex-shrink-0 m-2 p-2 flex-row items-center justify-around rounded shadow-lg h-40 w-full sm:flex-col sm:w-56 sm:h-32 md:m-6 md:w-64 md:h-48 lg:w-72 lg:h-56">
      <div>
        <img
          tw="object-contain p-1 object-top h-full w-48 sm:h-40 sm:w-56 md:h-48 md:w-64 lg:h-56 lg:w-72"
          src={require(`../public/images/trophies/${trophyImage}.jpg`)}
        />
      </div>
      <div tw="bg-gray-900 text-gray-200 rounded p-1">
        <p>
          {trophyCount} {trophyName}
        </p>
      </div>
    </div>
  )
}

export default TrophiesCard
