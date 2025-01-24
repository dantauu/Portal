import { Route, Routes } from 'react-router'
import Header from '../components/header/header'
import Application from '../pages/application/application'
import Orders from '../pages/orders/orders'
import { createContext, useState } from 'react'
import { TableData } from '../components/table/table'
import './index.css'

// type CurrentProps = {
//   currentRow
// }

interface ModalContextProps {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalValue: ModalContextProps = {
  isOpen: false,
  setIsOpen: () => {}
}


export const CurrentContext = createContext({})
export const ModalContext = createContext(ModalValue)

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentRow, setCurrentRow] = useState<TableData | null>(null)


  return (
		<>
			<CurrentContext.Provider value={{ currentRow, setCurrentRow }}>
				<ModalContext.Provider value={{ isOpen, setIsOpen }}>
					<Header />
					<Routes>
						<Route path='/' element={<Application />} index />
						<Route path='/orders' element={<Orders />} />
					</Routes>
				</ModalContext.Provider>
			</CurrentContext.Provider>
		</>
	)
}

export default App
