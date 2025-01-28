import { bookList } from '../data/BookList'
import BookItem from './BookItem'
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
			<ul className='lmj-book-list'>
				{bookList.map(({ id, cover, name, isSpecialOffer }) => (
					<BookItem
						id={id}
						cover={cover}
						name={name}
                        isSpecialOffer={isSpecialOffer}                      
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList