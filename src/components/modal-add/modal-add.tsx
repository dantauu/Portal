// Modal.tsx
import React, { useEffect, useState } from 'react'
import { TableData } from '../../app/types/global'


interface ModalProps {
	isOpen: boolean
	onClose: () => void
	onSave: (data: TableData) => void
	initialData?: TableData
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, initialData, }) => {
	const [formData, setFormData] = useState({
		id: '',
		oper: '',
		date: '',
		term: '',
		store: '',
		term2: '',
		profTS: '',
		status: '',
		areaBuy: '',
		myPrice: 0,
		propos: '',
		doubleOk: '',
		plusPropos: '',
		priceAnPropos: '',
		comission: '',
		toPrice: 0,
		create: '',
		okCreating: '',
		client: ''
	})

	useEffect(() => {
		if (initialData) {
			setFormData({
				id: initialData.id,
				oper: initialData.oper,
				date: initialData.date,
				term: initialData.term,
				store: initialData.store,
				term2: initialData.term2,
				profTS: initialData.profTS,
				status: initialData.status,
				areaBuy: initialData.areaBuy,
				myPrice: initialData.myPrice,
				propos: initialData.propos,
				doubleOk: initialData.doubleOk,
				plusPropos: initialData.plusPropos,
				priceAnPropos: initialData.priceAnPropos,
				comission: initialData.comission,
				toPrice: initialData.toPrice,
				create: initialData.create,
				okCreating: initialData.okCreating,
				client: initialData.client,
			})
		} else {
			setFormData({
				id: '',
				oper: '',
				date: '',
				term: '',
				store: '',
				term2: '',
				profTS: '',
				status: '',
				areaBuy: '',
				myPrice: 0,
				propos: '',
				doubleOk: '',
				plusPropos: '',
				priceAnPropos: '',
				comission: '',
				toPrice: 0,
				create: '',
				okCreating: '',
				client: ''
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
		<div className='fixed inset-0 flex items-center justify-center bg-[#00000082] bg-opacity-50'>
			<div className='bg-white rounded-lg modal-pad h-[345px] overflow-auto'>
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
					<div>
						<label>Терминал 2</label>
						<input
							type='text'
							name='term2'
							value={formData.term2}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Профиль ТС</label>
						<input
							type='text'
							name='profTS'
							value={formData.profTS}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Статус</label>
						<input
							type='text'
							name='status'
							value={formData.status}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Торги</label>
						<input
							type='text'
							name='areaBuy'
							value={formData.areaBuy}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Моя цена</label>
						<input
							type='text'
							name='myPrice'
							value={formData.myPrice}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Предложение</label>
						<input
							type='text'
							name='propos'
							value={formData.propos}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Согласовано</label>
						<input
							type='text'
							name='doubleOk'
							value={formData.doubleOk}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Доп услуги</label>
						<input
							type='text'
							name='plusPropos'
							value={formData.plusPropos}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Цена + доп услуги</label>
						<input
							type='text'
							name='priceAnPropos'
							value={formData.priceAnPropos}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Комиссия</label>
						<input
							type='text'
							name='comission'
							value={formData.comission}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>К оплате</label>
						<input
							type='text'
							name='toPrice'
							value={formData.toPrice}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Создано</label>
						<input
							type='text'
							name='create'
							value={formData.create}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Создал</label>
						<input
							type='text'
							name='okCreating'
							value={formData.okCreating}
							onChange={handleChange}
							className='border p-2 w-full'
						/>
					</div>
					<div>
						<label>Клиент</label>
						<input
							type='text'
							name='client'
							value={formData.client}
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
