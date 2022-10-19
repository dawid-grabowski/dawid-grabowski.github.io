import React, { useState } from 'react';
import './faq.css';
import { faqData, IFaqData } from '../../utils/faqData';

const FAQ: React.FC = (): React.ReactElement => {
	const [openedDetails, setOpenedDetails] = useState<number[]>([0]);

	const appendOpenedDetails = (index: number): void => {
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
				return (
					<details key={index} open={index === 0 ? true : false}>
						<summary onClick={() => appendOpenedDetails(index)}>
							<span>{index < 10 ? `0${index}.` : `${index}.`}</span>
							<h3>{title}</h3>
							<button>
								<div
									style={openedDetails.some((number: number) => number === index) ? { height: 0 } : {}}
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
