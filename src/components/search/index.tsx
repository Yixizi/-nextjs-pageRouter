import React, { memo, useState } from 'react';

import styles from './index.module.scss';
import classNames from 'classnames';
import { XSearchSuggest } from '@/service/home/homeType';
import { useRouter } from 'next/router';

interface SearchProps {
	children?: React.ReactNode;
	searchData?: XSearchSuggest;
}

const Search: React.FC<SearchProps> = memo((props) => {
	const { children, searchData } = props;

	const [inputFocus, setInputFocus] = useState<boolean>(false);
	const [placeholder, setPlaceholder] = useState<string>('蓝牙耳机');

	const router = useRouter();

	const handleInputFocus = (isFocus: boolean) => {
		setInputFocus(isFocus);
	};
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			const inputTarget = e.target as HTMLInputElement;
			goToSearchPage(inputTarget.value);
			setInputFocus(false);
		}
	};

	const handleItemClick = (name: string) => {
		// console.log(name);
		setPlaceholder(name);
		goToSearchPage(name);
	};

	const goToSearchPage = (name: string) => {
		router.push({
			pathname: '/search',
			query: {
				q: name,
			},
		});
	};

	return (
		<div className={styles.search}>
			<div className={styles['search-bg']}>
				<input
					onFocus={() => handleInputFocus(true)}
					onBlur={() => handleInputFocus(false)}
					onKeyDown={handleKeyDown}
					className={styles.input}
					type="text"
					placeholder={placeholder}
				/>
			</div>

			<div
				className={classNames(
					styles['search-panel'],
					inputFocus ? styles.show : styles.hide
				)}
			>
				<div className={styles.shadow}></div>

				<h2>热门搜索</h2>
				<ul>
					{searchData?.configKey &&
						searchData.configKey.map((item, index) => {
							return (
								<li
									key={item[index + 1]}
									onMouseDown={() => handleItemClick(item[index + 1])}
								>
									{item[index + 1]}
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
});

export default Search;

Search.displayName = 'Search';
