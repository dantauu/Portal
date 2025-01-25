import React from 'react'
import {
	useReactTable,
	ColumnDef,
	getCoreRowModel,
	flexRender,
} from '@tanstack/react-table'

export type TableData = {
	id: string
	oper: string
	date: string
    term: string
    store: string
	term2: string
	profTS: string
	status: string
	areaBuy: string
	myPrice: number
	propos: string
	doubleOk: string
	plusPropos: string
	priceAnPropos: string
	comission: string
	toPrice: number
	create: string
	okCreating: string
	client: string
}

type TableProps = {
	data: TableData[]
	onRowClick: (rowData: TableData) => void
}

const Table: React.FC<TableProps> = ({ data, onRowClick }) => {
	const columns: ColumnDef<TableData>[] = React.useMemo(
		() => [
			{ header: 'ID', accessorKey: 'id', id: 'id' },
			{ header: 'Операция', accessorKey: 'oper', id: 'oper' },
			{ header: 'Дата погрузки', accessorKey: 'date', id: 'date' },
			{ header: 'Терминал 1', accessorKey: 'term', id: 'term' },
			{ header: 'Склад', accessorKey: 'store', id: 'store' },
			{ header: 'Терминал 2', accessorKey: 'term2', id: 'term2' },
			{ header: 'Профиль ТС', accessorKey: 'profTS', id: 'profTS' },
			{ header: 'Статус', accessorKey: 'status', id: 'status' },
			{ header: 'Торги', accessorKey: 'areaBuy', id: 'areaBuy' },
			{ header: 'Моя цена', accessorKey: 'myPrice', id: 'myPrice' },
			{ header: 'Предложение', accessorKey: 'propos', id: 'propos' },
			{ header: 'Согласовано', accessorKey: 'doubleOk', id: 'doubleOk' },
			{ header: 'Доп услуги', accessorKey: 'plusPropos', id: 'plusPropos' },
			{ header: 'Цена + доп услуги', accessorKey: 'priceAnPropos', id: 'priceAnPropos' },
			{ header: 'Комиссия', accessorKey: 'comission', id: 'comission' },
			{ header: 'К оплате', accessorKey: 'toPrice', id: 'toPrice' },
			{ header: 'Создано', accessorKey: 'create', id: 'create' },
			{ header: 'Создал', accessorKey: 'okCreating', id: 'okCreating' },
			{ header: 'Клиент', accessorKey: 'client', id: 'client' },
		],
		[]
	)

	// Инициализация таблицы
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(), // Обработчик для строк
	})

	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full table-auto border-gray-300'>
				<thead className='bg-gray-200'>
					<tr className='flex gap-x-[40px] gap-y-[10px] container-table border-t border-b'>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
					</tr>

					{/* Вторая строка с названиями столбцов */}
					<tr className='bg-gray-300 flex container-table-id border-b'>
						<th className='px-4 py-2 text-left font-14 pad-id'>ID</th>
						<th className='px-4 py-2 font-14 border-r border-l w-[75px] text-center'>
							Операция
						</th>
						<th className='px-4 py-2 font-14 border-r w-[82px] text-center'>
							Дата погрузки
						</th>
						<th className='px-4 py-2 font-14 border-r w-[82px] text-center'>
							Терминал 1
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Склад
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[82px]'>
							Терминал 2
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Профиль ТС
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Статус
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Торги
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Моя цена
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Предло- жение
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Согла- совано
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Доп услуги
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Цена + доп усл
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							Комиссия
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[80px]'>
							К оплате
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Создано
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Создал
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Клиент
						</th>
					</tr>
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr
							key={row.id}
							onClick={() => onRowClick(row.original)} // Клик по строке
							className='cursor-pointer hover:bg-gray-100 flex container-data border'
						>
							{row.getVisibleCells().map(cell => (
								<td
									key={cell.id}
									className={`px-4 py-2
										${cell.column.id === 'id' ? 'padpad' : ''}
										${cell.column.id === 'oper' ? 'border-r-w-1' : ''}
										${cell.column.id === 'date' ? 'border-r-w-2' : ''}
										${cell.column.id === 'term' ? 'border-r-w-3' : ''}
										${cell.column.id === 'store' ? 'border-r-w-4' : ''}
										${cell.column.id === 'term2' ? 'border-r-w-4' : ''}
										${cell.column.id === 'profTS' ? 'border-r-w-4' :''}
										${cell.column.id === 'status' ? 'border-r-w-4' :''}
										${cell.column.id === 'areaBuy' ? 'border-r-w-4':''}
										${cell.column.id === 'myPrice' ? 'border-r-w-4':''}
										${cell.column.id === 'propos' ? 'border-r-w-4':''}
										${cell.column.id === 'doubleOk' ?'border-r-w-5':''}
										${cell.column.id === 'plusPropos' ?'border-r-w-5':''}
										${cell.column.id === 'priceAnPropos' ?'border-r-w-5':''}
										${cell.column.id === 'comission' ?'border-r-w-5':''}
										${cell.column.id === 'toPrice' ?'border-r-w-5':''}
										${cell.column.id === 'create' ?'border-r-w-5':''}
										${cell.column.id === 'okCreating' ?'border-r-w-5':''}
										
										`}
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
