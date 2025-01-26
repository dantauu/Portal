import { useContext, useState } from "react"
import Table from "../../components/table/table"
import Modal from "../../components/modal-add/modal-add"
import { CurrentContext, ModalContext } from "../../app/App"
import { TableData } from "../../app/types/global"


const Application = () => {
    const { isOpen, setIsOpen } = useContext(ModalContext)
    const { currentRow, setCurrentRow }: any = useContext(CurrentContext)
    const [data, setData] = useState<TableData[]>([])
    const handleRowClick = (rowData: TableData) => {
        setCurrentRow(rowData)
        setIsOpen(true)
    }

    const handleSave = (newData: TableData) => {
        if (currentRow) {
            setData((prevData) => prevData.map((row) => row.id === currentRow.id ? 
                { ...row, ...newData} : row))
        } else {
            setData((prevData) => [...prevData, { ...newData, id: String(prevData.length + 1)}])
        }
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <div className="">
			<div className=''>
				<h1 className='text-center size-xl pad-t'>Заявки</h1>
			</div>
            <Table data={data} onRowClick={handleRowClick} />
            <Modal 
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSave={handleSave}
                initialData={currentRow || undefined}
             />
        </div>
	)
}

export default Application