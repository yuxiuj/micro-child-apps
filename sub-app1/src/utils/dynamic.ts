import Loadable from 'react-loadable';
import Loading from '@components/RouteLoading';

const getDynamicComponent = path => {
	return Loadable({
		loader: () => import(`../pages/${path}`),
		loading: Loading,
	});
};

export default getDynamicComponent;
