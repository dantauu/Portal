import logo from '../../../public/logo.png'
import ButtonPlus from '../button-plus/button-plus'
import orderIcon from '../../../public/assets/img/orders.svg'
import applicationIcon from '../../../public/assets/img/apllication.svg'
import Button from '../button/button'
import { useContext } from 'react'
import { CurrentContext, ModalContext } from '../../app/App'

const Header = () => {
	const { setCurrentRow }: any = useContext(CurrentContext)
	const { setIsOpen } = useContext(ModalContext)
	const handleAddClick = () => {
		setCurrentRow(null)
		setIsOpen(true)
	}
    return (
			<div className='header__container'>
				<div className='header__wrapper flex items-center justify-around'>
					<div className='left__header-img'>
						<img src={logo} alt='' />
					</div>
					<div className='button__nav-wrapper flex gap-10'>
						<div className='button__application'>
							<Button img={applicationIcon} text='Заявки' link={'/'} />
						</div>
						<div className='button__order'>
							<Button img={orderIcon} text='Заказы' link={'/orders'} />
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