/*
  网站内容编辑说明：
  1. 作品信息在 works 数组中修改。
  2. 文章信息在 journals 数组中修改。
  3. 图片可以使用网络图片地址，也可以将图片放入 assets 文件夹后填写相对路径，例如 assets/desert.jpg。
  4. 新增作品时复制一组 { ... }，注意每组之间用逗号分隔。
*/
window.SITE_CONTENT = {
  works: [
    {
      id: "desert-evening",
      number: "001",
      title: "沙丘日落",
      english: "The Last Light",
      category: "TRAVEL / FILM",
      year: "2025",
      location: "中国 · 沙漠",
      date: "2025.09",
      shape: "landscape",
      cover: "assets/_DSC3451 拷贝1.jpg",
      alt: "开发网站怎么这么麻烦啊啊啊啊啊",
      story: "走到沙丘最高处时，太阳已经快要落下。脚下的沙粒松软，每一步都像在缓慢地退回原地。风把白天留下的热气吹散，远处的沙丘逐渐变成深浅不同的剪影。那一刻没有什么特别的事情发生，只是觉得，应该把这片光记下来。",
      gallery: [
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1800&q=85",
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200&q=85",
        "assets/_DSC3451 拷贝1.jpg"
      ]
    },
    {
      id: "quiet-water",
      number: "002",
      title: "水边的清晨",
      english: "Before the Day Begins",
      category: "LANDSCAPE / NOTES",
      year: "2025",
      location: "山间湖泊",
      date: "2025.06",
      shape: "portrait",
      cover: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85",
      alt: "晨雾中的湖泊与山峦",
      story: "清晨的湖面很安静，山的倒影被微风轻轻打碎。相机的快门声在这样的环境里显得有些突兀，所以我大部分时间只是站着看。后来才发现，记忆里留下来的并不是某一张照片，而是等待光线变化的那段时间。",
      gallery: [
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "open-road",
      number: "003",
      title: "路的另一边",
      english: "The Other Side of the Road",
      category: "JOURNEY / 35MM",
      year: "2024",
      location: "途中",
      date: "2024.11",
      shape: "square",
      cover: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      alt: "远处山脉与开阔天空",
      story: "旅途里的风景总是不断向后退。我们以为自己在寻找一个目的地，实际上记住的往往是途中那些没有计划的停留。路边的风、陌生的街道，还有快要错过的夕阳，都比想象中更值得记录。",
      gallery: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "small-things",
      number: "004",
      title: "日常的微光",
      english: "Small Ordinary Things",
      category: "DAILY / OBSERVATION",
      year: "2024",
      location: "日常",
      date: "2024.08",
      shape: "portrait",
      cover: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=85",
      alt: "阳光穿过树林",
      story: "并不是每次拿起相机都为了拍下一张重要的照片。有时只是午后的一束光，一片被风吹动的树叶，或是回家路上短暂的晴天。它们很普通，但正因为普通，才组成了生活的大部分。",
      gallery: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"
      ]
    }
  ],
  journals: [
    {
      date: "2025.09.18",
      title: "在沙漠里，等待最后一束光",
      excerpt: "关于一次缓慢的攀登，以及胶片如何把那个黄昏重新带回眼前。",
      tag: "TRAVEL NOTES",
      body: "在沙漠里走路，比想象中更费力。脚下的沙不断下陷，越接近沙丘顶部，越能感到身体的疲惫。但日落前的光线很值得等待。后来回看照片时，颗粒感让我再次想起那天的风、沙砾，以及太阳落下之前的安静。"
    },
    {
      date: "2025.07.02",
      title: "为什么我仍然喜欢慢慢拍照",
      excerpt: "不是为了让每一张照片都完美，而是给自己留一点观察的时间。",
      tag: "PHOTOGRAPHY",
      body: "慢慢拍照并不意味着拒绝新的工具，而是希望在按下快门之前，多看一会儿眼前的事物。光线会变化，人的情绪也会变化。照片记录下来的不只是一个画面，还有拍摄时的注意力。"
    },
    {
      date: "2025.03.16",
      title: "给自己的照片留一点空白",
      excerpt: "有时，照片旁边的文字不需要解释一切，留白本身也是叙述。",
      tag: "FIELD NOTES",
      body: "我越来越喜欢那些没有被填满的页面。照片之间的距离、标题下面的一行小字、没有说明的画面，都可以让观看的人拥有自己的理解。摄影集不一定需要讲清楚所有事情，也可以只是邀请别人停留片刻。"
    }
  ]
};
