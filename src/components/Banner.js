import '../styles/Banner.css'

// examples of using children to retrieve the childrens defined in App.js wihin the Banner structure
function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}
export default Banner
