/**
 * 유틸리티 타입
 */

interface Product{
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  something: object;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// 원하는 값을 Pick
function displayProductDetail(shoppingItem: Pick<Product, 'name'|'price'|'brand'>){}


// 3. 특정 상품 정보를 업데이트(갱신)하는 함수 
// 특정 타입의 부분 집합을 만족하는 타입 Partial
function updateProductItem(shoppingItem: Partial<Product>){}


// 4. 
// 지정된 속성만 제거한 타입 Omit
function displayProductDetailOmit(shoppingItem: Omit<Product, 'name'|'price'>){}


