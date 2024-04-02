import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BootstrapCarouselComponent extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">
{/* <h3>React Bootstrap Carousel</h3> */}
</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/2635/2018/8/1/Vishnu-Institute-of-Technology-Bhimavaram1.jpg"alt="First slide" 
/>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
{/* <Carousel.Item>
<img
className="d-block w-100"
src="https://in.images.search.yahoo.com/images/view;_ylt=Awr1SgzlkrdiPE80QNC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzA3MTRmNzM2ZTRlOTA0YmU5NGRlOTRhMmRjOTgzY2NkBGdwb3MDMzgEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsvecw%2Bcollege%2Bimages%26ei%3DUTF-8%26type%3DE211IN714G91668%26fr%3Dmcafee%26fr2%3Dsb-top-in.images.search%26tab%3Dorganic%26ri%3D38&w=1280&h=720&imgurl=i.ytimg.com%2Fvi%2Fvm5mThhCAwQ%2Fmaxresdefault.jpg&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dvm5mThhCAwQ&size=113.1KB&p=svecw+college+images&oid=0714f736e4e904be94de94a2dc983ccd&fr2=sb-top-in.images.search&fr=mcafee&tt=Sri+Vishnu+Educational+Society+Bhimavaram+-+Arial+View+-+YouTube&b=0&ni=135&no=38&ts=&tab=organic&sigr=ZEgHLyVwYdyg&sigb=s3jwoXA2Smsd&sigi=nmMuCgDtnf39&sigt=UJjYD.3B3aXc&.crumb=wOSfD0Asfmp&fr=mcafee&fr2=sb-top-in.images.search&type=E211IN714G91668"alt="Second slide"
/>
<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>  */}
<Carousel.Item>
<img
className="d-block w-100"
src="https://picsum.photos/500/300?img=3"
alt="Third slide"
/>
<Carousel.Caption>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarouselComponent;