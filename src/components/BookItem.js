import '../styles/BookItem.css'

function handleClick(bookName) {
	alert(`You want to buy the book ${bookName}?`)
}

function BookItem({ id, cover, name, isSpecialOffer}) {
    let sales
    if  (isSpecialOffer) {
        sales = <div className='lmj-sales'>Sales</div>
    } else {
        sales = <div className='lmj-ordinary'></div>
    }
	
    return (
		<li key={id} className='lmj-book-item' onClick={() => handleClick(name)}>
            {sales}
			<img className='lmj-book-item-cover' src={cover} alt={`${name} cover`} />
            {name}
		</li>
	)
}

export default BookItem
