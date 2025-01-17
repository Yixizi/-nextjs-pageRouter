import React, { memo, useRef, useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { Carousel } from 'antd';
import { XBanner } from '@/service/home/homeType';
import Image from 'next/image';
interface TopSwiperProps {
	children?: React.ReactNode;
	banners?: XBanner[];
}

const contentStyle: React.CSSProperties = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};
const TopSwiper: React.FC<TopSwiperProps> = memo((props) => {
	const { children, banners = [] } = props;
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const carouselRef = useRef<React.ComponentRef<typeof Carousel>>(null);

	console.log(banners[currentIndex]?.backendPicStr);

	const onSwiperChange = (currentE: number, nextE: number) => {
		setCurrentIndex(nextE);
	};
	const goToIndex = (index: number) => {
		carouselRef.current?.goTo(index);
	};
	const onPrev = () => {
		carouselRef.current?.prev();
	};
	const onNext = () => {
		carouselRef.current?.next();
	};
	return (
		<div className={styles['top-swiper']}>
			<div className={classNames('wrapper', styles.content)}>
				<Carousel
					ref={carouselRef}
					dots={false}
					beforeChange={onSwiperChange}
					className={styles.carousel}
					draggable={true}
					// autoplay
					// autoplaySpeed={3000}
				>
					{banners?.map((item) => (
						<div key={item.id} className={styles['swiper-item']} inert>
							<div
								className={styles['swiper-bg']}
								style={{
									backgroundImage: `url(${item.backendPicStr})`,
								}}
							></div>
							<Image
								className={styles['image']}
								src={item.picStr!}
								alt="banner"
								width={1000}
								height={480}
								priority
							/>
						</div>
					))}
				</Carousel>

				<ul className={styles.dots}>
					{banners?.map((item, index) => {
						return (
							<li
								key={item.id}
								className={classNames(styles.dot, {
									[styles.active]: currentIndex === index,
								})}
								onClick={() => goToIndex(index)}
							></li>
						);
					})}
				</ul>
			</div>

			<button className={styles.prev} onClick={onPrev}>
				<span></span>
			</button>
			<button className={styles.next} onClick={onNext}>
				<span></span>
			</button>
		</div>
	);
});

export default TopSwiper;

TopSwiper.displayName = 'TopSwiper';
