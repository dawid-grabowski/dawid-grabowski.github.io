import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ScissorsCard: React.FC = (): React.ReactElement => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [toggleView, setToggleView] = useState<boolean>(true);

	return (
		<div
			className='info-card'
			onClick={() => setToggleView(prevState => !prevState)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div className={`card-content ${toggleView ? 'hide-card' : 'show-card'}`}>
				<p>
					Pellentesque habitant morbi tristique senectus et netus et malesuada.Ipsum faucibus vitae aliquet nec
					ullamcorper sit amet risus nullam.
				</p>
				<div className='info-card-arrow'>
					{isHovered && 'Go back'} <FontAwesomeIcon icon={faChevronLeft} />
				</div>
			</div>
			<div className={`card-content ${!toggleView ? 'hide-card' : 'show-card'}`}>
				<FontAwesomeIcon icon={faScissors} />
				<div className='info-card-arrow'>
					{isHovered && 'View details'} <FontAwesomeIcon icon={faChevronRight} />
				</div>
			</div>
		</div>
	);
};

export default ScissorsCard;
