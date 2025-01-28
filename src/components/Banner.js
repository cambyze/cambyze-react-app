import '../styles/Banner.css'
import logo from '../assets/cambyze_icon.png'


function Banner() {
	const title = 'Cambyze Shopping Center'
	return <div className='lmj-banner'>
	<img src={logo} alt='Cambyze Shopping Center' className='lmj-logo' />
	</div>
}

export default Banner
