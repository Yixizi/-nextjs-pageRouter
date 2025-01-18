import React, { memo } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import digitalIcon from '../../assets/images/digitalicon.png';

interface DigitalPanelProps {
	children?: React.ReactNode;
	digitalData?: any;
}

const DigitalPanel: React.FC<DigitalPanelProps> = memo((props) => {
	const { children, digitalData } = props;
	console.log(digitalData);

	return (
		<div className={styles['digital-panel']}>
			<div className={styles.left}>
				<div className={styles.tap}>
					<Image src={digitalIcon} alt="digital" width={30} height={30}></Image>
					<span className={styles.name}>{digitalData.name}</span>
				</div>
				<div className={styles.desc}>{digitalData.desc}</div>
				<div className={styles.buyNow}>{digitalData.buyNow}</div>
			</div>
			<div className={styles.right}>
				<div className={styles.image}>
					<Image
						className={styles.picStr2}
						src={digitalData.picStr2}
						alt="digital"
						width={100}
						height={100}
					></Image>
					<div className={styles.bg}>
						<Image
							src={digitalData.picStr1}
							className={styles.picStr1}
							alt="digital"
							width={80}
							height={80}
						></Image>

						<Image
							className={styles.picStr}
							src={digitalData.picStr}
							alt="digital"
							width={70}
							height={150}
						></Image>
					</div>
				</div>
			</div>
		</div>
	);
});

export default DigitalPanel;

DigitalPanel.displayName = 'DigitalPanel';
