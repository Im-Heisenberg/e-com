import ProductList from "@/components/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
const Prostore = async () => {
	const latestProducts = await getLatestProducts();
	console.log(latestProducts)
	return (
		<>
			<ProductList data={latestProducts} title="Newest Arrival" limit={LATEST_PRODUCTS_LIMIT} />
		</>
	);
};

export default Prostore;
