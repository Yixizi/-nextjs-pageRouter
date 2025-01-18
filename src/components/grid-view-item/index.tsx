import React, { memo } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { XHotProduct, XProduct } from '@/service/home/homeType';
import Link from 'next/link';

interface GridViewItemProps {
	children?: React.ReactNode;
	product?: any;
	showTip?: boolean;
}

const GridViewItem: React.FC<GridViewItemProps> = memo((props) => {
	const { children, product, showTip = false } = props;
	const newProduct = product?.products ? product.products : product;

	return (
		<div className={styles['grid-view-item']}>
			<div className={styles['item-image']}>
				<Image
					src={newProduct!.coverUrl!}
					alt="image"
					width={263}
					height={263}
				></Image>

				{showTip && (
					<div className={styles.tip}>
						<div className={styles['min-price']}>￥{newProduct?.minPrice}</div>
						<div className={styles['original-cost']}>
							￥{newProduct?.originalCost}
						</div>
					</div>
				)}
			</div>
			<div className={styles['item-info']}>
				{newProduct?.couponLabelDesc && (
					<span className={styles.label}>{newProduct.couponLabelDesc}</span>
				)}
				<Link href={'/'} className={styles.name}>
					{newProduct?.name}
				</Link>
			</div>
			<div className={styles['item-price']}>￥{newProduct?.minPrice}</div>
		</div>
	);
});

export default GridViewItem;

GridViewItem.displayName = 'GridViewItem';
