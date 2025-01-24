// Modal.tsx
import React, { useEffect, useState } from 'react'

type DataProps = {
	id: string
	oper: string
	date: string
	term: string
	store: string
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	onSave: (data: DataProps) => void
	initialData?: DataProps
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, initialData, }) => {
	const [formData, setFormData] = useState({
		id: '',
		oper: '',
		date: '',
		term: '',
		store: '',
	})

	useEffect(() => {
		if (initialData) {
			setFormData({
				id: initialData.id,
				oper: initialData.oper,
				date: initialData.date,
				term: initialData.term,
				store: initialData.store,
			})
		} else {
			setFormData({
				id: '',
				oper: '',
				date: '',
				term: '',
				store: ''
			})
		}
	}, [initialData])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSave = () => {
		onSave(formData)
		onClose()
	}
	
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'>
			<div className='bg-white p-6 rounded-lg'>
				<form>
					<div>
						<label>ID</label>
						<input
							type='text'
							name='id'
							value={formData.id}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Операция</label>
						<input
							type='text'
							name='oper'
							value={formData.oper}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Дата погрузки</label>
						<input
							type='date'
							name='date'
							value={formData.date}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Терминал 1</label>
						<input
							type='text'
							name='term'
							value={formData.term}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Склад</label>
						<input
							type='text'
							name='store'
							value={formData.store}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div className='mt-4 flex justify-between'>
						<button
							type='button'
							onClick={onClose}
							className='bg-red-500 text-white px-4 py-2 rounded'
						>
							Закрыть
						</button>
						<button
							type='submit'
							onClick={handleSave}
							className='bg-blue-500 text-white px-4 py-2 rounded'
						>
							Сохранить
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Modal
