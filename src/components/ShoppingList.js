import { bookList } from '../data/BookList'
import '../styles/ShoppingList.css'

function ShoppingList() {
    // Reducing with a unique list of categories
	const categories = bookList.reduce(
		(acc, book) =>
			acc.includes(book.category) ? acc : acc.concat(book.category),
		[]
	)

    // Returns the list of categories and books
	return (
		<div>
            <div>List of categories</div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
            <div>List of books</div>
			<ul className='lmj-plant-list'  >
				{bookList.map((book) => (
					<li key={book.id} className='lmj-plant-item'>
                        {book.name}
                        {book.isSpecialOffer && <div className='lmj-sales'>Sales</div>}
                    </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList