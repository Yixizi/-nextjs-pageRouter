import React, { memo } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Link from 'next/link';
import Search from '../search';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';

interface NavbarProps {
	children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = memo((props) => {
	const { children } = props;
	const { suggest, counter } = useAppSelector(
		(state) => ({
			suggest: state.home.suggest,
			counter: state.home.counter,
		}),
		shallowEqual
	);

	return (
		<div className={classNames(styles.navbar)}>
			<div className={classNames('wrapper', styles.content)}>
				<div className={styles['content-left']}>
					<Link href="/" className={styles.logo}></Link>
					<h1 className={styles.title}>网易云音乐-音乐购有趣</h1>
				</div>
				<div className={styles['content-right']}>
					<Search searchData={suggest}></Search>
					<div className={styles['right-cart']}>
						<Link href="/" className={styles.cart}>
							<span className={styles.count}>{counter}</span>
						</Link>
					</div>
					<div className={styles['right-login']}>登录</div>
				</div>
			</div>
		</div>
	);
});

export default Navbar;

Navbar.displayName = 'Navbar';
