'use client';
import { useParams } from 'next/navigation';
import './styles.css';
import { useEffect, useState } from 'react';
import { ads } from '@/app/data';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { addToCart } from '@/store/slices/product';
import { Provider, useDispatch } from 'react-redux';
import { meraStore } from '@/store/store';

export default function Page(){
  return <Provider store={meraStore}>
      <ProductDetail></ProductDetail>
  </Provider>
}


function ProductDetail(){

  let dispatch = useDispatch();

  let [ad, setAd] =  useState({})
  let params = useParams();

  useEffect(()=>{

  let adMilgya = ads.find((ad)=>{
    if(decodeURI(params.abc) == ad.name){
      return true;
    }
  });

  if(adMilgya){
    setAd(adMilgya);
  }
    

  }, []);

    return <div className="container">
      <h1>{params.abc}</h1>    
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <Zoom>
                  <img src={ad.src} />
                </Zoom>                
              </div>             
            </div>
         
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{ad.name}</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <span className="review-no">41 reviews</span>
            </div>
            <p className="product-description">
              Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia
              sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus
              posuere.
            </p>
            <h4 className="price">
              current price: <span>${ad.price}</span>
            </h4>
            <p className="vote">
              <strong>91%</strong> of buyers enjoyed this product!{" "}
              <strong>(87 votes)</strong>
            </p>
            <h5 className="sizes">
              sizes:
              <span className="size" data-toggle="tooltip" title="small">
                s
              </span>
              <span className="size" data-toggle="tooltip" title="medium">
                m
              </span>
              <span className="size" data-toggle="tooltip" title="large">
                l
              </span>
              <span className="size" data-toggle="tooltip" title="xtra large">
                xl
              </span>
            </h5>
            <h5 className="colors">
              colors:
              <span
                className="color orange not-available"
                data-toggle="tooltip"
                title="Not In store"
              />
              <span className="color green" />
              <span className="color blue" />
            </h5>
            <div className="action">
              <button onClick={()=>{

                dispatch(addToCart(ad))

              }} className="add-to-cart btn btn-default" type="button">
                add to cart
              </button>
              <button className="like btn btn-default" type="button">
                <span className="fa fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  

}