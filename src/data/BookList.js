import algorithms from '../assets/algorithms.jpg'
import quality from '../assets/quality.jpg'
import python from '../assets/python.jpg'
import architecture from '../assets/architecture.jpg'
import foundations from '../assets/foundations.jpg'
import systems from '../assets/systems.jpg'
import ontology from '../assets/ontology.jpg'


export const bookList = [
	{
		name: 'Algorithms',
		category: 'misc',
		id: '1',
		cover: algorithms,
		pages: 300,
		price: 2
	},
	{
		name: 'Data Quality',
		category: 'misc',
		id: '2',
		cover: quality,
		pages: 500,
		price: 3
	},
	{
		name: 'Guide to Python',
		category: 'language',
		id: '3',
		isSpecialOffer: true,
		cover: python,
		pages: 150,
		price: 1
	},
	{
		name: 'Architecture ',
		category: 'language',
		id: '4',
		cover: architecture,
		pages: 320,
		price: 2
	},
	{
		name: 'Foundations ',
		category: 'misc',
		id: '5',
		isSpecialOffer: true,
		cover: foundations,
		pages: 500,
		price: 3
	},
	{
		name: 'Operating Systems',
		category: 'OS',
		id: '6',
		cover: systems,
		pages: 250,
		price: 1
	},
	{
		name: 'Ontology',
		category: 'misc',
		id: '7',
		cover: ontology,
		pages: 800,
		price: 3
	}
]