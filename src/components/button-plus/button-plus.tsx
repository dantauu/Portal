import plusIcon from '../../../public/assets/img/plus.svg'

type AddBtnProps = {
	onClick: () => void
}

const ButtonPlus = ({ onClick }: AddBtnProps) => {

    return (
			<div onClick={onClick} className='flex items-center cursor-pointer bg-[#62daf8] rounded-md'>
				<div className=''>
					<img className='w-10' src={plusIcon} alt='' />
				</div>
				<div className=''>
					<button className='cursor-pointer color-text-button'>Добавить</button>
				</div>
			</div>
		)
}

export default ButtonPlus