import React, { memo } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import wrapper from '@/store';
import { fetchSearchSuggest } from '@/store/modules/home';
import { getProductSearchData } from '@/service/server';
import { XProduct } from '@/service/home/homeType';
import GridView from '@/components/grid-view';

interface SearchProps {
	children?: React.ReactNode;
	products?: XProduct[];
}

const Search: React.FC<SearchProps> = memo((props) => {
	const { children, products } = props;
	const router = useRouter();
	const { q } = router.query;
	// console.log(products);

	// getProductSearchData({
	// 	limit: 60,
	// 	offset: 0,
	// 	// key: q as string,
	// }).then((res) => {
	// 	console.log(res);
	// });

	return (
		<div className={styles.search}>
			<div>Search</div>
			<div className="wrapper">
				<GridView product={products}></GridView>
			</div>
		</div>
	);
});

export default Search;

Search.displayName = 'Search';

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => {
		return async (content) => {
			await store.dispatch(fetchSearchSuggest());

			const { q } = content.query;

			const res = await getProductSearchData({
				limit: 60,
				offset: 0,
				// key: q as string,
			});
			// console.log(res);
			return {
				props: {
					products: res.products,
				},
			};
		};
	});
