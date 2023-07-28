import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Map.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

const { kakao } = window;

const Kakao = () => {

    const navigate = useNavigate();
   
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const initInfo = {'content':'', 'address':'', 'phone':''};
    const [info, setInfo] = useState(initInfo);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();
    const [area, setArea] = useState('계양구');
    const [coord, setCoord] = useState({
      lat: 37.5538245,
      lng: 126.7456244,
    });

    const selectList = ["동물병원", "애견미용실", "애견카페", '애견분양'];
    const [category, setCategory] = useState(selectList[0]);
    const [isOpen, setIsOpen] = useState(false);

    // const { currentCoordinate } = getCurrentCoordinate;
    
    const handleSubmit = (e) => {
      setCategory(e.target.value);
      setInfo(initInfo);
      e.preventDefault();
    };

    var pin = '/images/marker-blue.png';
    if (category==='동물병원') {
        pin = '/images/marker-red.png';
    }
    if (category==='애견미용실') {
        pin = '/images/marker-pink.png';
    }
    if (category==='애견카페') {
        pin = '/images/marker-blue.png';
    }
    if (category==='애견분양') {
      pin = '/images/marker-orange.png';
    }

  // const getAddr = (coords) => {
  //   const geocoder = new kakao.maps.services.Geocoder(); 
  //   let callback = function(result, status) {
  //     if (status === kakao.maps.services.Status.OK) {
  //         const arr  ={ ...result};
  //         const _arr = arr[0].region_2depth_name;
  //         console.log('****** ' + _arr);
  //         setArea(_arr);
  //     }
  // }
    // const result = geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback); 



    useEffect(() => {    
        if (!map || !category) return;
        const ps = new kakao.maps.services.Places();            
        const keyword = area + ' ' + category;   
        console.log('coord : ' + coord.lat + ' ' + coord.lng);   
        // var options = {
        //   location: {
        //     lat: 37.5538245,
        //     lng: 126.7456244,
        //   },
        //   radius: 10000,
        //   sort: kakao.maps.services.SortBy.DISTANCE,
        // };

        ps.keywordSearch(keyword, (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds();
            let markers = [];
    
            for (var i = 0; i < data.length; i++) {
              // @ts-ignore
              markers.push({
                position: {
                  lat: data[i].y,
                  lng: data[i].x,
                },
                content: data[i].place_name,
                address: data[i].address_name,
                phone: data[i].phone,
              });
              // @ts-ignore
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            setMarkers(markers);
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        })
      }, [map,category]);

	return (
        <>

        {/* fix Header - 뒤로가기/홈, 공유 */}
        <div class={styles.header}>
            <div class={styles.header__wrapper}>
              <div class={styles.header__start}>         
                <img class={styles.header__icon} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
                <Link to='/'><img class={styles.header__icon} src='/images/home2.png'></img></Link>
                <span class={styles.header__area}>박촌동</span>				
              </div>
                <div class={styles.header__end}>
                    <form>
                      <select class={styles.sel} onChange={handleSubmit}>
                        {selectList.map((item) => (
                            <option value={item} key={item}>
                            {item}
                            </option>
                        ))}
                      </select>
                    </form>
                </div>    
            </div>
        </div> 

        <div class={styles.map}>
          <Map 
              center={{
                  lat: 37.5538245,
                  lng: 126.7456244,
              }}
              style={{
                  width: "100%",
                  height: "100%",
              }}
              level={3}
              onDragEnd={(map) => {
                  // getAddr(map.getCenter());
                  setCoord(map.getCenter());
              }}
              onCreate={setMap}
              >
              {markers.map((marker) => (
                      <MapMarker
                      key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                      position={marker.position}
                      image={{
                        // src: "/images/marker-blue.png", 
                        src: pin,
                        size: {
                          width: 30,
                          height: 35,
                        }, 
                        options: {
                          offset: {
                            x: 27,
                            y: 69,
                          },
                        },
                      }}
                      onClick={ () => { setInfo(marker); setIsOpen(true);} }
                      >
                     {info &&info.content === marker.content &&isOpen && (                 
                          <CustomOverlayMap 
                              position={ marker.position } 
                              zIndex={999}
                              xAnchor={0.8}
                              yAnchor={2.8}                              
                          >
                            <div class={styles.infowindow}>&#x2022; {marker.content}
                                <div
                                  className={styles.close}
                                  onClick={() => { setIsOpen(false); setInfo(initInfo); } }
                                  title="닫기"
                                >X</div>
                            </div>
                          </CustomOverlayMap>
                      )} 

                      </MapMarker>
                  ))}
          </Map>
        </div>

        <Footer info={ info }/>
          
          
        </>
	);
}    

function Footer(props) {
  const { info } = props;
  return (
    <>
      { info.content !== '' && 
             <div  class={styles.footer}>

                <div class={styles.footer__contents}>
                    <div>&#x2022; {info.content}</div>
                    <div>&#x2022; {info.address}</div>
                    <div>&#x2022; {info.phone}</div>          
                </div>
            
                 <Footer_Call val={info} />

            </div>
      }
    </>
  )
}

function Footer_Call(props) {
  const { val } = props;
  const phonenum = 'tel:' + val.phone;
 
  return (
    <>
    { val.phone !== '' && 
      <div class={styles.footer__call}>
        <a href={phonenum}>
          <img src='/images/call1.png' alt='전화걸기' title='전화걸기' />
        </a>   
      </div>
    }   
    </>
  )
}


const getCurrentCoordinate = async () => {
  console.log("getCurrentCoordinate 함수 실행!!!");
  return new Promise((res, rej) => {
    // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        const lat = position.coords.latitude; // 위도
        const lng = position.coords.longitude; // 경도

        const coordinate = new kakao.maps.LatLng(lat, lng);
        res(coordinate);
      });
    } else {
      rej(new Error("현재 위치를 불러올 수 없습니다."));
    }
  });
};



export default Kakao;