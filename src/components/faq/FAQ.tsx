import React, { useState } from 'react';
import './faq.css';
import { faqData, IFaqData } from '../../utils/faqData';

const FAQ: React.FC = (): React.ReactElement => {
	const [openedDetails, setOpenedDetails] = useState<number[]>([1]);

	const handleOpenedDetails = (index: number): void => {
		if (openedDetails.some(number => number === index)) {
			const filteredDetails = openedDetails.filter((number: number) => number !== index);

			setOpenedDetails(filteredDetails);
			return;
		}
		setOpenedDetails([...openedDetails, index]);
	};

	return (
		<section>
			<h2>Lacinia quis vel eros tempor orci.</h2>
			{faqData.map(({ title, description }: IFaqData, index: number) => {
				const incrementedIndex: number = index + 1;
				return (
					<details key={index} open={incrementedIndex === 0 ? true : false}>
						<summary onClick={() => handleOpenedDetails(incrementedIndex)}>
							<span>{incrementedIndex < 10 ? `0${incrementedIndex}.` : `${incrementedIndex}.`}</span>
							<h3>{title}</h3>
							<button>
								<div
									style={openedDetails.some((number: number) => number === incrementedIndex) ? { height: 0 } : {}}
									className='button-first-line'></div>
								<div className='button-second-line'></div>
							</button>
						</summary>
						<p>{description}</p>
					</details>
				);
			})}
		</section>
	);
};

export default FAQ;
