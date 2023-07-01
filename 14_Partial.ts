/**
 * Partial 구현 과정
 */

interface UserProfile {
  username: string,
  email: string,
  profilePhotoUrl: string,
}

/**
 * #1 interface의 key를 할당하는 방식
 */
type UserProfileUpdate1 = {
  username?:  UserProfile['username'],
  email?:  UserProfile['email'],
  profilePhotoUrl?:  UserProfile['profilePhotoUrl'],
}

/**
 * #2 맵드 타입 (in operator 활용)
 */
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

/**
 *  #3 keyof 사용으로 한번 더 축약
*/
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p]
}

/**
 *  #4 Generic 사용으로 한번 더 축약 (Partial 구현체와 같음)
 */
type Subset<T> = {
  [p in keyof T]?: T[p]
}

 