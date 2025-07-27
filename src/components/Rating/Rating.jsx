import starIcon from '@img/icons/star.svg'
import starActiveIcon from '@img/icons/start-active.svg'
import './Rating.scss'

function Rating({ amountStars, maxAmountStarts = 5, suffixClass }) {
	const createStarts = () => {
		const starts = []
		for (let indexStar = 0; indexStar < maxAmountStarts; indexStar++) {
			const star = (
				<div key={indexStar} className="rating__star">
					<img
						className="rating__img ibg ibg-container"
						src={starIcon}
						alt="Image"
					/>
					{indexStar < amountStars ? (
						<img
							className="rating__img ibg ibg-container"
							src={starActiveIcon}
							alt="Image"
						/>
					) : null}
				</div>
			)
			starts.push(star)
		}
		return starts
	}

	return <div className={`${suffixClass} rating`}>{createStarts()}</div>
}

export default Rating
