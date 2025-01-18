import React, { memo } from 'react';
import styles from './index.module.scss';
import { XHotProduct, XProduct } from '@/service/home/homeType';
import { Col, Row } from 'antd';
import GridViewItem from '../grid-view-item';

interface GridViewProps {
	children?: React.ReactNode;
	product?: XHotProduct[] | XProduct[];
}

const GridView: React.FC<GridViewProps> = memo((props) => {
	const { children, product = [] } = props;

	return (
		<div className={styles['grid-view']}>
			<Row>
				{product?.map((item, index) => {
					return (
						<Col key={item.id} span={6}>
							<div className={styles['view-item']}>
								<GridViewItem
									showTip={index === 0}
									product={item}
								></GridViewItem>
							</div>
						</Col>
					);
				})}
			</Row>
		</div>
	);
});

export default GridView;

GridView.displayName = 'GridView';
