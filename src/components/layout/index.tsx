import React, { memo } from 'react';
import Footer from '@/components/footer/index';
import Navbar from '../navbar';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = memo((props) => {
	const { children } = props;

	return (
		<div className="layout">
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</div>
	);
});

export default Layout;

Layout.displayName = 'Layout';
