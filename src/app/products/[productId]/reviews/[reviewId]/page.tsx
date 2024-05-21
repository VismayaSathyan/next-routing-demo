import { notFound } from "next/navigation"
export default function ReviewDetails({ params }
  : { params: { reviewId: string, productId: string } }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  } else {
    return <>

      <h1>Reviews Detais</h1>
      <h2>Product Id: {params.productId}</h2>
      <h2>Review Id: {params.reviewId} </h2>
    </>

  }
}