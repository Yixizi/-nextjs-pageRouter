import React, { memo } from 'react';
import styles from './index.module.scss';
import { XCategory } from '@/service/home/homeType';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import Image from 'next/image';

interface TabCategoryProps {
	children?: React.ReactNode;
	categorys?: XCategory[];
}

const TabCategory: React.FC<TabCategoryProps> = memo((props) => {
	const { children, categorys = [] } = props;

	return (
		<div className={classNames(styles['tab-category'])}>
			<div className={classNames('wrapper', styles.content)}>
				<Row gutter={16}>
					{categorys.map((item) => {
						return (
							<Col className="gutter-row" key={item.cid} span={6}>
								<div className={classNames(styles['category-item'])}>
									<Image
										className={styles.image}
										src={item.picStr!}
										alt="category"
										width={48}
										height={48}
									></Image>
									<div className={styles.right}>
										<div className={styles.title}>{item.title}</div>
										{item.type === 1 && (
											<div className={styles.tip}>
												<span className={styles.count}>{item.count}</span>
												<span className={styles.desc}>{item.desc}</span>
											</div>
										)}
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
});

export default TabCategory;

TabCategory.displayName = 'TabCategory';
