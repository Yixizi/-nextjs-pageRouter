import React, { memo } from 'react';
import styles from './index.module.scss';

interface SectionTitleProps {
	children?: React.ReactNode;
	title?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = memo((props) => {
	const { children, title = '默认标题' } = props;

	return (
		<div className={styles['section-title']}>
			<div>{title}</div>
		</div>
	);
});

export default SectionTitle;

SectionTitle.displayName = 'SectionTitle';
