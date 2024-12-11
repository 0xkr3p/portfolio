export default function Home() {
	return (
		<div className='grid grid-cols-1 gap-4 items-center justify-items-center'>
			<main className='max-w-4xl flex flex-col gap-8 row-start-2 items-center sm:items-start p-4'>
				<p className='text-4xl font-bold'>
					hey, i&apos;m <span className='text-lime-400 italic'>krep</span> 👋
				</p>
				<p className='text-xl'>
					I&apos;m a software engineer. I&apos;m passionate about building
					products that are both functional and aesthetically pleasing.
				</p>
				<p className='text-xl'>
					I enjoy reading and staying up to date with the latest in the fields
					of AI and Web3.
				</p>
				<p className='text-xl'>
					I&apos;m currently working on a few projects, but I&apos;m always
					looking for new opportunities to work on.
				</p>
				<p className='text-xl'>
					If you would like to work with me, feel free to reach out to me on{' '}
					<a
						href='https://x.com/0xkr3p'
						className='underline text-lime-400 hover:text-lime-500'
					>
						x
					</a>
					.
				</p>
			</main>
		</div>
	)
}
