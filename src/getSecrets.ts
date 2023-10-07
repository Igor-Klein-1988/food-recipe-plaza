import * as core from '@actions/core'

export function getSecrets(): { edamamAppId: string; edamamAppKey: string } {
	const edamamAppId = core.getInput('REACT_EDAMAM_APP_ID')
	const edamamAppKey = core.getInput('REACT_EDAMAM_APP_KEY')
	return { edamamAppId, edamamAppKey }
}
