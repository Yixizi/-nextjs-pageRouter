import React, { memo } from 'react';
import styles from './index.module.scss';
import { GetServerSideProps } from 'next';
import wrapper from '@/store';
import { getDetailPageInfo } from '@/service/detail';
import { XDetailPageInfo } from '@/service/detail/detailType';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import GridView from '@/components/grid-view';
import { fetchSearchSuggest } from '@/store/modules/home';

interface DetailProps {
	children?: React.ReactNode;
	detailPageInfo?: XDetailPageInfo;
}

const Detail: React.FC<DetailProps> = memo((props) => {
	const { children, detailPageInfo } = props;
	// console.log(detailPageInfo);
	const router = useRouter();
	const { id } = router.query;
	// console.log(id);

	return (
		<div className={styles.detail}>
			<div className={classNames('wrapper', styles.content)}>
				<div className={styles.banner}>
					<Link href={'/'}>
						<Image
							className={styles.image}
							src={detailPageInfo!.webPic!}
							alt="air"
							fill
						></Image>
					</Link>
				</div>
				<div className={styles.info}>
					<GridView product={detailPageInfo?.products}></GridView>
				</div>
			</div>
		</div>
	);
});

export default Detail;

Detail.displayName = 'Detail';

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => {
		return async (context) => {
			const { id } = context.query;
			const res = await getDetailPageInfo(id as string);
			await store.dispatch(fetchSearchSuggest());
			return {
				props: {
					detailPageInfo: res.data,
				},
			};
		};
	});
