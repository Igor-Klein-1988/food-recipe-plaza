import { FC } from 'react'
import ReactSelect from 'react-select'

import { HealthLabel } from '../../../recipeTypes'

import style from './HealthSelect.module.css'
import { HealthOptions, HealthOptionType } from '../../../recipeOptions'

interface HealthSelectProps {
	onChange: (value: HealthLabel) => void
	healthLabel: HealthLabel
}

const HealthSelect: FC<HealthSelectProps> = (props: HealthSelectProps): JSX.Element => {
	const { onChange, healthLabel } = props
	console.log({ healthLabel })
	console.log('1111')

	console.log(HealthOptions.find((option) => option.value === healthLabel))
	return (
		<ReactSelect<HealthOptionType>
			className={style.container}
			value={HealthOptions.find((option) => option.value === healthLabel)}
			onChange={(option: HealthOptionType | null) => {
				if (option) {
					onChange(option?.value)
				}
			}}
			options={HealthOptions}
		/>
	)
}

export default HealthSelect
