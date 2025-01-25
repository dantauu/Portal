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
						<th className='px-4 py-2 font-14 border-r border-l w-[81px] text-center'>
							Операция
						</th>
						<th className='px-4 py-2 font-14 border-r max-w-[72px] text-center'>
							Дата погрузки
						</th>
						<th className='px-4 py-2 font-14 border-r w-[71px] text-center'>
							Терминал 1
						</th>
						<th className='px-4 py-2 text-center font-14 border-r min-w-[71px]'>
							Склад
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Терминал 2
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Профиль ТС
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Статус
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Торги
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Моя цена
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Предло- жение
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Согла- совано
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Доп услуги
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[71px]'>
							Цена + дом усл
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
							Комиссия
						</th>
						<th className='px-4 py-2 text-center font-14 border-r w-[72px]'>
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
