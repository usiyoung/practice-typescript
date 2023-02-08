/**
 * 유틸리티 타입
 */
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  //
}

// Pick : 사용하고 싶은 key값을 선택해 타입을 줄 수 있다.
// 필요한 interface를 별도로 설정하지 않고 사용하고 싶은 속성들만 선택해 사용하면 된다.

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type shoppingItem1 = Pick<Product, 'id' | 'name' | 'brand'>
function displayProductDetail1(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){
  
}

// Pick 과 반대로 Omit 타입은 필요없는 속성을 지정해준 후 사용한다
type shoppingItem2 = Omit<Product, 'id' | 'name'>
function displayProductDetail2(shoppingItem: Omit<Product, 'id' | 'price'>){
  
}

// 3. 특정 상품의 정보를 업데이트(갱신)하는 함수
type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>){

}