import { takeLatest } from "redux-saga/effects";
import { getCategory, searchProduct } from "./productSlide";
import { handleGetCategory, handleSearch } from "./handleProduct";

export default function* productSaga() {
  yield takeLatest(searchProduct.type, handleSearch);
  yield takeLatest(getCategory.type, handleGetCategory);
}