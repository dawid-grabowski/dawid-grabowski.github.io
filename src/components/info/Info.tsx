import React from 'react';
import './info.css';
import RobotCard from './cards/RobotCard';
import ScissorsCard from './cards/ScissorsCard';
import BowlingCard from './cards/BowlingCard';
import BatteryCard from './cards/BatteryCard';

const Info: React.FC = (): React.ReactElement => {
	return (
		<summary className='info'>
			<div className='info-text'>
				<h2>Massa tempor nec feugiat nisl pretium fusce</h2>
				<p>
					Pellentesque <span className='bolded'>habitant</span> morbi tristique senectus et netus et malesuada.
					<span className='bolded'>Ipsum faucibus vitae</span> aliquet nec ullamcorper sit amet risus nullam.
				</p>
				<p>
					Dictum varius duis at consectetur <span className='bolded'>lorem donec</span> massa sapien. Massa tempor nec
					feugiat nisl pretium fusce.
				</p>
				<p>Elit scelerisque mauris pellentesque?</p>
			</div>
			<div className='info-cards'>
				<BowlingCard />
				<ScissorsCard />
				<RobotCard />
				<BatteryCard />
			</div>
		</summary>
	);
};

export default Info;
