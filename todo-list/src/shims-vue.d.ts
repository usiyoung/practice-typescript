/**
 * typescript 컴파일이 시작 > *.vue를 만나게 될 때
 */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
