import Banner from './Banner'
import ShoppingList from './ShoppingList'
import logo from '../assets/cambyze_icon.png'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='Cambyze Shopping Center' className='lmj-logo' />
				<h1 className='lmj-title'>Cambyze Shopping Center</h1>
			</Banner>
			<ShoppingList />
		</div>
	)
}

export default App
