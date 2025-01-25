import logo from '../../../public/logo.png'
import ButtonPlus from '../button-plus/button-plus'
import orderIcon from '../../../public/assets/img/orders.svg'
import applicationIcon from '../../../public/assets/img/apllication.svg'
import Button from '../button/button'
import { useContext, useEffect, useState } from 'react'
import { CurrentContext, ModalContext } from '../../app/App'

const Header = () => {
	const { setCurrentRow }: any = useContext(CurrentContext)
	const { setIsOpen } = useContext(ModalContext)
	const handleAddClick = () => {
		setCurrentRow(null)
		setIsOpen(true)
	}
	const [dataTime, setDataTime] = useState<string>('')
	const getFormattedDate = () => {
		const now = new Date()
		const day = now.getDate()
		const month = now.toLocaleString('ru-RU', { month: 'long' })
		const year = now.getFullYear()
		const time = now.toLocaleTimeString('ru-RU', { hour12: false })

		return `Сегодня ${day} ${month} ${year}г ${time}`
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setDataTime(getFormattedDate())
		}, 1000)

		return () => clearInterval(interval)
	}, [])
    return (
			<div className='header__container'>
				<div className='header__wrapper flex items-center justify-around'>
					<div className='left__header-img'>
						<img className='w-[120px]' src={logo} alt='' />
					</div>
					<div className='flex flex-col'>
						<div className='button__nav-wrapper flex gap-10'>
							<div className='button__application'>
								<Button img={applicationIcon} text='Заявки' link={'/'} />
							</div>
							<div className='button__order'>
								<Button img={orderIcon} text='Заказы' link={'/orders'} />
							</div>
						</div>
						<div className="mar-t">
							{dataTime}
						</div>
					</div>
					<div className='button__plus-wrapper'>
						<ButtonPlus onClick={handleAddClick} />
					</div>
				</div>
			</div>
		)
}

export default Header