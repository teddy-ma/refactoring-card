import React from 'react';

const About = () => {

  return (
    <div className="row">
      <div className="medium-12 columns">
        <h3>为什么做这个页面?</h3>
        <p>第一次阅读完《重构》第二版的时候我就感觉到作为一本工具书，纸制书查阅起来很不方便, 而就算是电子版，也缺少一个可以浏览所有手法的地方，因此我制作了这个页面。</p>
        <p>默认情况下只会显示重构手法的图片，我觉得这些图片真的非常好，可以很直观的表达重构的思路。最理想的情况就是望图生义，如果你看到某张图但是想不起来对应的重构的手法，那么可以点击查看详情来获得进一步的信息</p>
        <p>希望本站可以帮助你更熟练的记忆和查询各种重构手法。</p>
        <p>P.S. 详情页中的页码数据来自我手上的中文精装版, 如果电子版添加了新的纸制版没有的手法, 那么对应的页面数据为空</p>
      </div>
    </div>
  );
};

export default About;
