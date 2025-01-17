import React, { memo } from 'react';

interface FooterProps {
	children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = memo((props) => {
	const { children } = props;

	return <div>Footer</div>;
});

export default Footer;

Footer.displayName = 'Footer';
