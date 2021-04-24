export default {
  pages: [
    'pages/my/index',
    'pages/explore/index',
    'pages/create/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#F9F9F9',
    navigationBarTitleText: 'Continue',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [{
        pagePath: "pages/create/index",
        text: "创作",
        "iconPath": "./static/icon/_create.png",
        "selectedIconPath": "./static/icon/create.png"
      },
      {
        pagePath: "pages/explore/index",
        text: "探索",
        "iconPath": "./static/icon/_explore.png",
        "selectedIconPath": "./static/icon/explore.png"
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        "iconPath": "./static/icon/_my.png",
        "selectedIconPath": "./static/icon/my.png"
      },
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#F9F9F9',
    'borderStyle': 'white',
  },
}