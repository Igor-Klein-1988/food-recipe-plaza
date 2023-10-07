import { FC } from 'react';

import style from './RecipeTitle.module.css';

interface RecipeInterface {
	data: {
		recipe: {
			label: string;
			image: string;
		};
	};
}

const RecipeTitle: FC<RecipeInterface> = ({ data }): JSX.Element => (
	<div className={style.recipeTile}>
		<img className={style.recipeTile__img} src={data.recipe.image} alt="" />
		<p className={style.recipeTile__name}>{data.recipe.label}</p>
	</div>
);

export default RecipeTitle;
