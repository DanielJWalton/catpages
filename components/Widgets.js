import {SearchIcon} from '@heroicons/react/outline';
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
	{
		src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		name: 'Ian Dooley',
	},
	{
		src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		name: 'Toa Heftiba',
	},
	{
		src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
		name: 'Christina Wocin',
	},
	{
		src: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
		name: 'Gian Cecson',
	},
	{
		src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		name: 'Elizeu Dias',
	},
	{
		src: 'https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
		name: 'Mimi Thain',
	},
	{
		src: 'https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
		name: 'Jenny Erhunse',
	},
];

function Widgets() {
	return (
		<div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
			<div className='flex justify-between items-center text-gray-500 mb-4'>
				<h2 className='text-xl'>Contacts</h2>
				<div className='flex space-x-2'>
					<VideoCameraIcon className='h-6' />
					<SearchIcon className='h-6' />
					<DotsHorizontalIcon className='h-6' />
				</div>
			</div>
			{contacts.map(contact => (
				<Contact key={contact.src} src={contact.src} name={contact.name} />
			))}
		</div>
	);
}

export default Widgets;
