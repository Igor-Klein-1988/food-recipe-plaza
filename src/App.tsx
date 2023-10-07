import { FormEvent, useState } from 'react';
import axios from 'axios';

import './App.css';
// import { APP_ID, APP_KEY } from './app/service'

import type { HealthLabel } from './recipeTypes';
import RecipeTitle from './app/components/RecipeTitle/RecipeTitle';
import HealthSelect from './app/components/HealthSelect/HealthSelect';

function App(): JSX.Element {
	const API_ID: string = import.meta.env.VITE_EDAMAM_APP_ID;
	const API_KEY: string = import.meta.env.VITE_EDAMAM_APP_KEY;
	console.log({ API_ID, API_KEY });

	const [recipes, setRecipes] = useState<any[]>([]);
	const [query, setQuery] = useState<string>('');
	const [healthLabel, setHealthLabel] = useState<HealthLabel | ''>('');

	const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}&health=${healthLabel}`;

	async function getRecipeInfo(): Promise<void> {
		const result = await axios.get(URL);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
		setRecipes(result.data?.hits);
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		getRecipeInfo();
	};

	return (
		<div className="app">
			<h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
			<form className="app__searchForm" onSubmit={onSubmit}>
				<input
					className="app__input"
					type="text"
					placeholder="enter ingredient"
					autoComplete="Off"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<HealthSelect onChange={setHealthLabel} healthLabel={healthLabel} />

				<input className="app__submit" type="submit" value="Search" />
			</form>

			<div className="app__recipes">
				{recipes.length > 0 &&
					recipes.map((recipe, index) => <RecipeTitle key={`recipe-#${index}`} data={recipe} />)}
			</div>
		</div>
	);
}

export default App;
