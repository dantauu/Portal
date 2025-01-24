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
					{/* Первая строка с кнопками "Фильтр" */}
					<tr className='flex gap-x-[40px] gap-y-[10px] container-table border-t border-b'>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
						<th className='px-4 py-2 text-left border-r pad-r'>
							<button className='w-full p-2 text-sm bg-blue-500 text-white rounded-md cursor-pointer font-14'>
								Фильтр
							</button>
						</th>
					</tr>

					{/* Вторая строка с названиями столбцов */}
					<tr className='bg-gray-300 flex container-table-id border-b'>
						<th className='px-4 py-2 text-left font-14 pad-id'>ID</th>
						<th className='px-4 py-2 text-left font-14'>Операция</th>
						<th className='px-4 py-2 text-left font-14'>Дата погрузки</th>
						<th className='px-4 py-2 text-left font-14'>Терминал 1</th>
						<th className='px-4 py-2 text-left font-14'>Склад</th>
						<th className='px-4 py-2 text-left font-14'>Терминал 2</th>
						<th className='px-4 py-2 text-left font-14'>Профиль ТС</th>
						<th className='px-4 py-2 text-left font-14'>Статус</th>
						<th className='px-4 py-2 text-left font-14'>Торги</th>
					</tr>
				</thead>
				<tbody>
					{/* Строки таблицы */}
					{table.getRowModel().rows.map(row => (
						<tr
							key={row.id}
							onClick={() => onRowClick(row.original)} // Клик по строке
							className={`cursor-pointer hover:bg-gray-100 flex container-data border ${row.id === 'id' && 'padpad'}`}
						>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id} className='px-4 py-2 border-r border-l'>
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
