/* eslint-disable  */
import TopSwiper from '@/components/top-swiper';
import {
	getAllProduct,
	getHomeInfo,
	getHotProduct_v2,
	getSearchSuggest,
} from '@/service/home/home';
import { XAllProduct, XHomeInfo, XHotProductV2 } from '@/service/home/homeType';
import wrapper, { useAppDispatch, useAppSelector } from '@/store';
import { fetchSearchSuggest, increment } from '@/store/modules/home';
import { Button } from '@nextui-org/react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { shallowEqual } from 'react-redux';
import styles from './index.module.scss';
import TabCategory from '@/components/tab-category';
import Recommend from '@/components/recommend';
import classNames from 'classnames';
import SectionTitle from '@/components/section-title';
import GridView from '@/components/grid-view';
import DigitalPanel from '@/components/digitalPanel';

export interface HomeProps extends XHomeInfo {
	hotProducts?: XHotProductV2;
	allProducts?: XAllProduct;
}

const Home: React.FC<HomeProps> = (props) => {
	const {
		banners,
		recommends,
		categorys,
		digitalData,
		hotProducts,
		allProducts,
	} = props;

	const { counter } = useAppSelector(
		(state) => ({
			counter: state.home.counter,
		}),
		shallowEqual
	);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.home}>
			<Head>
				<title>云音乐-商城</title>
			</Head>
			<TopSwiper banners={banners} />
			<TabCategory categorys={categorys} />
			<Recommend recommends={recommends} />
			<div className={classNames('wrapper', styles.content)}>
				<SectionTitle title="编辑推荐"></SectionTitle>
				<GridView product={hotProducts?.hotProduct!}></GridView>
				<DigitalPanel digitalData={digitalData}></DigitalPanel>
				<SectionTitle title="热门商品"></SectionTitle>
				<GridView product={allProducts?.allProduct!}></GridView>
			</div>
		</div>
	);
};

export default Home;
Home.displayName = 'Home';

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => {
		return async (context) => {
			await store.dispatch(fetchSearchSuggest());

			const res = await getHomeInfo();
			const resHot = await getHotProduct_v2();
			const resAll = await getAllProduct();
			return {
				props: {
					banners: res.data.banners || [],
					categorys: res.data.categorys || [],
					recommends: res.data.recommends || [],
					digitalData: res.data.digitalData || [],

					hotProducts: resHot.data || [],
					allProducts: resAll.data || [],
				},
			};
		};
	});
