import ProductList from "@/components/product/product-list";
import sampleData from "@/db/sample-data";
console.log(sampleData);
const Prostore = () => {
	return <>
	<ProductList data={sampleData.products} title="Newest Arrival" />
	</>
};

export default Prostore;
