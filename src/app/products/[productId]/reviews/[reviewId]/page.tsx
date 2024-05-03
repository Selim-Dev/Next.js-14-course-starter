import React from "react";
import { notFound } from "next/navigation";
const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 500) {
    notFound();
  }
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
