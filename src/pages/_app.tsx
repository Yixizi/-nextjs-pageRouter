import 'reset.css';
import 'normalize.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import wrapper from '@/store';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect } from 'react';

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<NextUIProvider>
				<Layout>
					<Component {...props.pageProps} />
				</Layout>
			</NextUIProvider>
		</Provider>
	);
}
