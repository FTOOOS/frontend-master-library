const { Kakao } = window;

export const shareKakao = (title, imageUrl, sharedUrl) => {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: title,
      description: "프론트엔드 장인의 서재에서 책을 확인해보세요.",
      imageUrl: imageUrl,
      link: {
        webUrl: sharedUrl,
        mobileWebUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: "자세히 보기",
        link: {
          webUrl: sharedUrl,
          mobileWebUrl: sharedUrl,
        },
      },
    ],
  });
};
