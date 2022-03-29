import StoryCard from './StoryCard';
import Feed from './Feed';
const stories = [
	{
		name: 'Dan Walton',
		src: 'https://images.unsplash.com/photo-1643603528883-941596ca641a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
		profile:
			'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		name: 'Domny Hill',
		src: 'https://images.unsplash.com/photo-1635445249494-b100ce11a0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
		profile:
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
	},
	{
		name: 'Dan Cutler',
		src: 'https://images.unsplash.com/photo-1595372454104-4327d4f49d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		profile:
			'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
	},
	{
		name: 'Ryan Klaus',
		src: 'https://images.unsplash.com/photo-1641694548561-ff6c4cd49053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		profile:
			'https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
	{
		name: 'Ian Naag',
		src: 'https://images.unsplash.com/photo-1645370286297-18bb9eb28c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
		profile:
			'https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
];

function Stories() {
	return (
		<div className='flex justify-center space-x-3 mx-auto'>
			{stories.map(story => (
				<StoryCard
					key={story.src}
					name={story.name}
					src={story.src}
					profile={story.profile}
				/>
			))}
		</div>
	);
}

export default Stories;
