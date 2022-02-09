import Image from 'next/image'
import dogImage from '../images/dog2.png';
const myLoader = ({ src, width, quality }) => {
  return `http://ai.esmplus.com/${src}?w=${width}&q=${quality || 75}`
}

export default function FirstHomePost() {
  /**
   * next/image 사용시 장점
   * 1.이미지가 다양한 화면 크기에서 반응하는지 확인
   * 2.타사 도구 또는 라이브러리로 이미지 최적화
   * 3.뷰포트에 들어갈 때만 이미지 로드
   */
  return (
    <>
      <h1>Posts home</h1>
      <h4>Static File Serving</h4>
      <img src="/images/dog1.jpg" alt="dog1" />
      <br />
      <div style={{width: '100vw'}}>
        <Image
          src="/images/dog2.png"
          alt="dog2"
          width="640"
          height="640"/>
      </div>
      <div>
        {/* <Image
          src="{dogImage}"
          alt="dog2"
          width="640"
          height="640" /> */}
      </div>
      <div>
        <Image
          loader={myLoader}
          src="sdyna/SDHB/img/SDHB_000000000023846_D00.jpg"
          alt="dog2"
          width="640"
          height="640" />
      </div>
    </>
  )
}