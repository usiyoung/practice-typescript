type Heroes = 'Hulk' | 'Capt' |'Thor'
type HeroAges = { [ K in Heroes]: number }  

const ages: HeroAges = {
  Hulk: 13,
  Capt: 13,
  Thor: 13,
}