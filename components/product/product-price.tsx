import { cn } from "@/lib/utils";
const ProductPrice = ({
	value,
	classname,
}: {
	value: number;
	classname?: string;
}) => {
	const stringValue = Number(value).toFixed(2);
	const [intValue, floatValue] = stringValue.split(".");
	return (
		<p className={cn("tsxt-2xl", classname)}>
			<span className="text-xs align-super">$</span>
			{intValue}
			<span className="text-xs align-super">.{floatValue}</span>
		</p>
	);
};

export default ProductPrice;
