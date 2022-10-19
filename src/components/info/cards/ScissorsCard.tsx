import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ScissorsCard: React.FC = (): React.ReactElement => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<div className='info-card' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<FontAwesomeIcon icon={faScissors} />
			<div className='info-card-arrow'>
				{isHovered && 'View details'} <FontAwesomeIcon icon={faChevronRight} />
			</div>
		</div>
	);
};

export default ScissorsCard;
