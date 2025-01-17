/* eslint-disable  */
import TopSwiper from '@/components/top-swiper';
import { getHomeInfo, getSearchSuggest } from '@/service/home/home';
import { XHomeInfo } from '@/service/home/homeType';
import wrapper, { useAppDispatch, useAppSelector } from '@/store';
import { fetchSearchSuggest, increment } from '@/store/modules/home';
import { Button } from '@nextui-org/react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { shallowEqual } from 'react-redux';
import styles from './index.module.scss';
import TabCategory from '@/components/tab-category';
import Recommend from '@/components/recommend';

export interface HomeProps extends XHomeInfo {}

const Home: React.FC<HomeProps> = (props) => {
	const { banners, recommends, categorys, digitalData } = props;

	const { counter } = useAppSelector(
		(state) => ({
			counter: state.home.counter,
		}),
		shallowEqual
	);
	const dispatch = useAppDispatch();

	const addCounter = () => {
		dispatch(increment(1));
	};

	return (
		<div className={styles.home}>
			<Head>
				<title>云音乐-商城</title>
			</Head>
			<TopSwiper banners={banners} />
			<TabCategory categorys={categorys} />
			<Recommend recommends={recommends}/>
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
			return {
				props: {
					banners: res.data.banners || [],
					categorys: res.data.categorys || [],
					recommends: res.data.recommends || [],
					digitalData: res.data.digitalData || [],
				},
			};
		};
	});
