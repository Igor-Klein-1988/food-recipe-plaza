import { FC } from 'react';
import ReactSelect from 'react-select';
import { HealthLabel } from '../../../recipeTypes';
import { HealthOptionType, HealthOptions } from '../../../recipeOptions';

import style from './HealthSelect.module.css';
interface HealthSelectProps {
	onChange: (value: HealthLabel) => void;
	healthLabel: HealthLabel;
}

const HealthSelect: FC<HealthSelectProps> = (props: HealthSelectProps): JSX.Element => {
	const { onChange, healthLabel } = props;

	return (
		<ReactSelect<HealthOptionType>
			className={style.container}
			value={HealthOptions.find((option) => option.value === healthLabel)}
			onChange={(option: HealthOptionType | null) => {
				if (option) {
					onChange(option?.value);
				}
			}}
			options={HealthOptions}
		/>
	);
};

export default HealthSelect;
