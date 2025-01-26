import { baseApiAuth } from './api-auth'


export const api = baseApiAuth.injectEndpoints({
	endpoints: builder => ({
		getToken: builder.mutation({
			query: data => ({
				url: `api/v1/auth/token`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					username: data.username,
					password: data.password,
					grant_type: 'password',
				}),
			}),
		}),
	}),
})

export const { useGetTokenMutation } = api

