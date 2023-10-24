import { FC, useEffect, useState } from 'react';
import { CiPizza } from 'react-icons/ci';
import { GiFruitBowl, GiNoodles } from 'react-icons/gi';
import { MdOutlineIcecream } from 'react-icons/md';
import { TiCancelOutline } from 'react-icons/ti';

import { fetchTabData } from '../../api';

import './navBar.scss';

interface NavBarProps {
	setLoader: (value: boolean) => void;
}

const NavBar: FC<NavBarProps> = (props): JSX.Element => {
	const { setLoader } = props;
	const [active, setActive] = useState('None');
	const tabLabel = [
		{
			name: 'None',
			query: '',
			icon: <TiCancelOutline />,
		},
		{
			name: 'Pizza',
			query: 'pizza',
			icon: <CiPizza />,
		},
		{
			name: 'Noodles',
			query: 'noodles',
			icon: <GiNoodles />,
		},
		{
			name: 'Desert',
			query: 'desert',
			icon: <GiFruitBowl />,
		},
		{
			name: 'Ice cream',
			query: 'ice cream',
			icon: <MdOutlineIcecream />,
		},
	];

	const handleClick = (name: string, query: string): void => {
		setActive(name);
		console.log({ query });

		fetchTabData(query).then((response) => {
			setLoader(false);
		});
	};

	useEffect(() => {
		fetchTabData(tabLabel[0].query).then((response) => {
			setLoader(false);
		});
	}, []);

	return (
		<div className="container">
			<h1 className="recipeHeading">What would you like to have!</h1>
			<div className="tabs">
				{tabLabel.map((item, index) => (
					<div
						onClick={() => (handleClick(item.name, item.query), setLoader(true))}
						key={index}
						className={`tablist ${active === item.name ? 'active' : ''}`}
					>
						{item.icon}
						<span>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default NavBar;
