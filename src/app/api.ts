interface QueryStrings {
	edamamAppId: string;
	edamamAppKey: string;
}

const queryStrings: QueryStrings = {
	edamamAppId: import.meta.env.VITE_EDAMAM_APP_ID,
	edamamAppKey: import.meta.env.VITE_EDAMAM_APP_KEY,
};

export const fetchData = async (defaultQuery: string): Promise<any> => {
	const { edamamAppId, edamamAppKey } = queryStrings;
	try {
		const data = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${edamamAppId}&app_key=${edamamAppKey}`
		);
		const response = await data.json();
		return response;
	} catch (e) {
		console.error(e, 'something went wrong');
		return e;
	}
};

export const fetchTabData = async (defaultQuery: string): Promise<any> => {
	const { edamamAppId, edamamAppKey } = queryStrings;
	try {
		const data = await fetch(
			// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=a8a7c3fa&app_key=52b35bab3e90df4ebc69c30561a7531b
			`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${edamamAppId}&app_key=${edamamAppKey}`
		);
		const response = await data.json();
		return response;
	} catch (e) {
		console.error(e, 'something went wrong');
		return e;
	}
};
