import { FormEvent, useState } from 'react'
import ReactSelect from 'react-select'
import axios from 'axios'

import './App.css'
import { APP_ID, APP_KEY } from './key'
// import RecipeTitle from "./components/RecipeTitle/RecipeTitle"
import type { HealthLabel } from './RecipeTypes'
import { HealthOptionType, HealthOptions } from './RecipeOptions'
import RecipeTitle from './app/components/RecipeTitle/RecipeTitle'

function App(): JSX.Element {
	const [recipes, setRecipes] = useState<any[]>([])
	const [query, setQuery] = useState('')
	const [healthLabel, setHealthLabel] = useState<HealthLabel | ''>('')

	const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`

	async function getRecipeInfo(): Promise<void> {
		const result = await axios.get(URL)
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
		setRecipes(result.data?.hits)
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		getRecipeInfo()
	}

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
				<ReactSelect<HealthOptionType>
					className="app__HealthLabelSelect"
					value={HealthOptions.find((option) => option.value === healthLabel)}
					onChange={(option: HealthOptionType | null) => {
						if (option) {
							setHealthLabel(option?.value)
						}
					}}
					options={HealthOptions}
				/>

				<input className="app__submit" type="submit" value="Search" />
			</form>

			<div className="app__recipes">
				{recipes.length > 0 &&
					recipes.map((recipe, index) => <RecipeTitle key={`recipe-#${index}`} data={recipe} />)}
			</div>
		</div>
	)
}

export default App
