import React from 'react';
import { MdSearch } from 'react-icons/md';

const Header = ({ handleToggleDarkMode,handleSearchNote }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
			</div>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

// const Search = ({  }) => {
// 	return (
		
// 	);
// };
export default Header;

