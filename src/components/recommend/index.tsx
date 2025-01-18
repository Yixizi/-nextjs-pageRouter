import { XRecommend } from '@/service/home/homeType';
import classNames from 'classnames';
import React, { memo } from 'react';
import styles from './index.module.scss';
import { Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

interface RecommendProps {
	children?: React.ReactNode;
	recommends?: XRecommend[];
}

const Recommend: React.FC<RecommendProps> = memo((props) => {
	const { children, recommends = [] } = props;

	return (
		<div className={classNames('wrapper', styles.content)}>
			<Row>
				{recommends.map((item) => {
					return (
						<Col key={item.id} span={12}>
							<Link
								href={'/detail?id=' + item.id}
								className={styles['recommend-item']}
							>
								<Image
									alt="recommend"
									className={styles.image}
									src={item.picStr!}
									width={542}
									height={300}
								/>
							</Link>
						</Col>
					);
				})}
				<Col span={12}>1123</Col>
			</Row>
		</div>
	);
});

export default Recommend;

Recommend.displayName = 'Recommend';
