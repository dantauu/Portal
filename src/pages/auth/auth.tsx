import React, { useState } from 'react'
import { useGetTokenMutation } from '../../redux/api/api'

const Auth = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [getToken, { data, isLoading, isError }] = useGetTokenMutation()

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			await getToken({ username, password }).unwrap()
			console.log('Token received:', data) 
		} catch (error) {
			console.error('Failed to fetch token:', error)
		}
	}

	return (
		<div className='main-container'>
			<div className='form__wrapper flex flex-col justify-center items-center h-[700px]'>
				<form className='bg-[#b9b9b9] rounded-xl form-pad' onSubmit={handleLogin}>
					<div className='flex flex-col gap-[20px]'>
						<div className='bg-[#e4e4e4] rounded-md'>
							<input
								type='text'
								placeholder='Username'
								value={username}
								onChange={e => setUsername(e.target.value)}
								className='h-[40px] outline-none'
							/>
						</div>
						<div className='bg-[#e4e4e4] rounded-md'>
							<input
								type='password'
								placeholder='Password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								className='h-[40px] outline-none'
							/>
						</div>
					</div>
					<div className='relative cursor-pointer text-[#fff] bg-[#0005] margin-t rounded-md flex justify-center'>
						<button className='cursor-pointer' type='submit' disabled={isLoading}>
							{isLoading ? 'Загрузка...' : 'Войти'}
						</button>
					</div>
					{isError && <p className='text-[red] absolute'>Error fetching token</p>}
				</form>
			</div>
		</div>
	)
}

export default Auth