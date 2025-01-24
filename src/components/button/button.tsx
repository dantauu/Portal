import { FC } from "react"
import { Link } from "react-router"



type ButtonProps = {
    text: string
    img: string
    link: string
}

const Button: FC<ButtonProps> = ({ text, img, link }) => {
    return (
			<Link to={link} className='wrapper__button cursor-pointer flex items-center gap-2'>
				<div className='button__img'>
					<img className="w-10" src={img} alt='' />
				</div>
				<div className='item__button'>
					<button className="cursor-pointer" 
                    style={{ fontFamily: 'Montserrat-M' }}>
                            {text}
                    </button>
				</div>
			</Link>
		)
}

export default Button