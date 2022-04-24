declare global {
  interface Window {
    Kakao: any;
  }
}

const { Kakao } = window;

export default function initialize() {
  Kakao.init("e716bec418fef1870ecb10c417f8d9c0");
}
