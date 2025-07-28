import emailIcon from '@img/icons/social/email.svg'
import facebookIcon from '@img/icons/social/facebook.svg'
import instagramIcon from '@img/icons/social/instagram.svg'
import twitterIcon from '@img/icons/social/twitter.svg'
import './SocialList.scss'

function SocialList({ social, suffixClass }) {
	const socialIcons = {
		email: {
			icon: emailIcon,
			alt: 'Write to email',
		},
		facebook: {
			icon: facebookIcon,
			alt: 'Go to our facebook',
		},
		instagram: {
			icon: instagramIcon,
			alt: 'Go to our instagram',
		},
		twitter: {
			icon: twitterIcon,
			alt: 'Go to our twitter',
		},
	}

	const createSocial = () => {
		const items = []
		for (const [key, link] of Object.entries(social)) {
			items.push(
				<li key={key} className="social__item">
					<a
						href={key === 'email' ? `mailto:${link}` : link}
						target="_blank"
						className="social__link"
					>
						<img
							className="ibg ibg--contain"
							src={socialIcons[key]?.icon}
							alt={socialIcons[key]?.alt}
						/>
					</a>
				</li>
			)
		}
		return items
	}

	if (!social) return null
	return <ul className={`${suffixClass} social`}>{createSocial()}</ul>
}

export default SocialList
