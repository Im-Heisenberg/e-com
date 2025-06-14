import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card>
			<CardHeader className="p-0 items-center">
				<Link href={`product/${product.slug}`}>
					<Image
						src={product.images[0]}
						alt={product.name}
						priority={true}
						height={300}
						width={300}
					/>
				</Link>
			</CardHeader>
			<CardContent className="p-4 grid gap-4">
				<div className="text-xs">{product.brand}</div>
				<Link href={`/product/${product.slug}`}>
					<h2 className="font-medium text-sm">{product.name}</h2>
				</Link>
				<div className="flex-between gap-4">
					<p>{product.rating} Stars</p>
					{product.stock > 0 ? (
						<ProductPrice value={Number(product?.price)} />
					) : (
						<p className="text-destructive">Out Of Stock</p>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
