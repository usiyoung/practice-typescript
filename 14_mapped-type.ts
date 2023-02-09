/**
 * 맵드 타입
 */
type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [ K in Heroes]: number }
const ages: HeroAges = {
  Hulk: 25,
  Capt: 30,
  Thor: 50,
}