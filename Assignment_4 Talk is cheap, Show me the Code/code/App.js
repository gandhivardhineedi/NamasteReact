import React from 'react';
import ReactDOM  from 'react-dom/client';
import {BiSearchAlt} from 'react-icons/bi';
import {IoHelpBuoyOutline} from 'react-icons/io5';
import { TbDiscount2 } from "react-icons/tb";
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart, AiFillStar} from 'react-icons/ai';


import logo from '../IMG/Logo/logo.png'

const resturantData = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "480613",
          "name": "Hotlines Family Restaurant",
          "uuid": "999f0149-14f2-44cc-ac88-e6a9930cc5dc",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "fzswgiydx1saojgempaw",
          "cuisines": [
            "Biryani",
            "Fast Food",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "lastMileTravel": 8.899999618530273,
          "slugs": {
            "restaurant": "hotline-family-restaurant-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "D.No. 21-1-8, MOHAN PLAZA, J P ROAD, BHIMAVARAM,West Godavari, Andhra Pradesh-534201",
          "locality": "Jp Road,Bhimavaram",
          "parentId": 288746,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "480613",
            "deliveryTime": 40,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 40,
            "lastMileTravel": 8.899999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.3",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "574794",
          "name": "Sri Ramu Sweets & Bakery",
          "uuid": "94d8a5f4-ac97-4a2f-994d-92be4eec8afa",
          "city": "10126",
          "area": "PP Road",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "jn1d4mnyvopouhza6hku",
          "cuisines": [
            "Bakery",
            "Sweets",
            "Snacks",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "slaString": "38 MINS",
          "lastMileTravel": 9.100000381469727,
          "slugs": {
            "restaurant": "sri-ramu-sweets-&-bakery-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "Dno: 8-1-23/3, Near Saintmary hospital, PP road, Bhimavaram, West Godavari, Andhra Pradesh - 534203",
          "locality": "Somavaram",
          "parentId": 344855,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "574794",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "lastMileTravel": 9.100000381469727,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "526782",
          "name": "Sri Ganesh Juice Center",
          "uuid": "44fa04e0-156e-4c63-98d8-bbb207dff6ee",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "xb1zpppg7qxc41aff0sv",
          "cuisines": [
            "Juices",
            "Beverages",
            "Ice Cream"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "slaString": "39 MINS",
          "lastMileTravel": 9.100000381469727,
          "slugs": {
            "restaurant": "sri-ganesh-juice-center-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "RTC DEPO OPPOSITE, NEAR AMERICAN HOSPITAL, PP ROAD, BHIMAVARAM, Annavaram, Bhimavaram, West Godavari, Andhra Pradesh - 534202",
          "locality": "Somavaram",
          "parentId": 193690,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "526782",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "lastMileTravel": 9.100000381469727,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.3",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "459013",
          "name": "The Grill Theory",
          "uuid": "fc47522d-ad0a-47a7-a858-6a22b213eb4d",
          "city": "10126",
          "area": "Bhimavaram",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "rsyooojjaehitr73mbdw",
          "cuisines": [
            "Grill",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "slaString": "43 MINS",
          "lastMileTravel": 9.100000381469727,
          "slugs": {
            "restaurant": "the-grill-theory-bhimavaram-town-bhimavaram-town",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "H.No. 8-1-23, GUNUPUDI VILLAGE, BHIMAVARAM",
          "locality": "Bhimavaram Town",
          "parentId": 209281,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "459013",
            "deliveryTime": 43,
            "minDeliveryTime": 43,
            "maxDeliveryTime": 43,
            "lastMileTravel": 9.100000381469727,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "594708",
          "name": "Prem Raj Canteen",
          "uuid": "b1923bda-da83-460f-ac36-e45e574f4c7a",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "es12jpayibf1xf0vkwew",
          "cuisines": [
            "Chinese",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "slaString": "44 MINS",
          "lastMileTravel": 9.100000381469727,
          "slugs": {
            "restaurant": "prem-raj-canteen-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "D.No. 10-1-69, PP Road, BHIMAVARAM,Bhimav aram West Godavari,Anshra Pradesh-534201",
          "locality": "Pproad",
          "parentId": 355723,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "594708",
            "deliveryTime": 44,
            "minDeliveryTime": 44,
            "maxDeliveryTime": 44,
            "lastMileTravel": 9.100000381469727,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "178758",
          "name": "Alisha's Bawarchi Biryani - 1",
          "uuid": "2ebc73e3-ce3c-45f1-b40d-efb9c1139670",
          "city": "10126",
          "area": "Gandhinagar",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "qlnmglsvepnvuqat82sy",
          "cuisines": [
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 47,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 55,
          "slaString": "45-55 MINS",
          "lastMileTravel": 10.899999618530273,
          "slugs": {
            "restaurant": "bhawarchi-biryani-1-town-police-bomma-centre-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "Opp Annapurna Theatre, New Bus Stop, Bhimavaram, Andhra Pradesh 534202",
          "locality": "Opp Annapurna Theatre",
          "parentId": 30182,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "10.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "178758",
            "deliveryTime": 47,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 55,
            "lastMileTravel": 10.899999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.5",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "525997",
          "name": "Dessertino",
          "uuid": "e3a971e8-973d-43cf-8411-39c19838d7a0",
          "city": "10126",
          "area": "Bhimavaram Town",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "mfrtcqrutih5ekdtt6ed",
          "cuisines": [
            "Ice Cream",
            "Waffle",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 41,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 11,
          "slugs": {
            "restaurant": "dessertino-bhimavaram-town-bhimavaram-town",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "D.No. 22-7-92/1, SRI RAMA COMPLEX, RAJA STREET, MAVULLAMA TEMPLE ROAD, BHIMAVARAM",
          "locality": "Bhimavaram Town",
          "parentId": 71457,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "525997",
            "deliveryTime": 41,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 11,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "380785",
          "name": "Jai Sri Raj Restaurant and Meals",
          "uuid": "d6ff6a81-63af-4943-85e7-fd0144ffb7e8",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "hpt7jxlrwqf3eepiu0dc",
          "cuisines": [
            "Biryani",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 43,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 11.300000190734863,
          "slugs": {
            "restaurant": "jai-sri-raj-restaurant-and-meals-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "22-16-53, Near Mavullamma Temple, Rest House Road, Bhimavaram Locality, 534201",
          "locality": "Somavaram",
          "parentId": 108750,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "380785",
            "deliveryTime": 43,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 11.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.4",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "335069",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "uuid": "0ff00145-d1b7-40bc-a393-2b87c61cabc8",
          "city": "10126",
          "area": "Gandhinagar",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "ujoiol0rcjwmt92mkejw",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 41,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 11.399999618530273,
          "slugs": {
            "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "22-2-30, PP ROAD, BHIMAVARAM., District - West Godavari, STATE - Andhra Pradesh",
          "locality": "Somavaram",
          "parentId": 582,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "335069",
            "deliveryTime": 41,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 11.399999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "501028",
          "name": "Sri Raja Ice Parlour And Bakery",
          "uuid": "f8d20bfd-3334-4624-960a-d1e3a16a0a38",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "uonudzphxi4d0lzddnbr",
          "cuisines": [
            "Chinese",
            "Biryani",
            "Indian",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 49,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 55,
          "slaString": "45-55 MINS",
          "lastMileTravel": 11.300000190734863,
          "slugs": {
            "restaurant": "sri-raja-ice-parlour-and-bakery-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "JULURI GOPI RAJU D.NO.22-7-78,79,80, NEAR MAVULLAMMA TEMPLE, NHIMAVARAM , West Godavari, Andhra Pradesh-534201",
          "locality": "Somavaram",
          "parentId": 300307,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "501028",
            "deliveryTime": 49,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 55,
            "lastMileTravel": 11.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "486426",
          "name": "Ajantha Canteen",
          "uuid": "d9e03275-d3fd-4bcf-b2fb-614541c36e03",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "ipq0vykg2bzsouxnjyrw",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 45,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 11.5,
          "slugs": {
            "restaurant": "ajantha-canteen-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "BALUSUMOODI,UNID ROAD, NEAR TOWN RAILWAY STATION ROAD, BHIMAVARAM-2 PINCODE- 534202, Rayalam (Rural), Bhimavaram, West Godavari, Andhra Pradesh - 534202",
          "locality": "Undi Road,Bhimavaram",
          "parentId": 293052,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "486426",
            "deliveryTime": 45,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 11.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "396515",
          "name": "Rama Ice Parlour",
          "uuid": "27209bd5-3757-408c-942b-a78bc791e78e",
          "city": "10126",
          "area": "PP Road",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "lazpo2fu4uqteewxdzpk",
          "cuisines": [
            "Indian",
            "Beverages",
            "Ice Cream"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 41,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 11.399999618530273,
          "slugs": {
            "restaurant": "rama-ice-parlour-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "22-2-30, PP Road, Bhimavaram,534201",
          "locality": "Somavaram",
          "parentId": 253405,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "396515",
            "deliveryTime": 41,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 11.399999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "226279",
          "name": "New Vasundara Fast Foods",
          "uuid": "d9237b54-a379-43c3-a921-7d8c7109e1ff",
          "city": "10126",
          "area": "Bank Colony",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "u2hqnrv80t2kshssunpj",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 48,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 55,
          "slaString": "45-55 MINS",
          "lastMileTravel": 11.5,
          "slugs": {
            "restaurant": "new-vasundara-fast-foods-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "Rest House Road,OPP New london hospital,bhimavaram",
          "locality": "Somavaram",
          "parentId": 148322,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "226279",
            "deliveryTime": 48,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 55,
            "lastMileTravel": 11.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "178225",
          "name": "BFC",
          "uuid": "8eeeca87-e005-447b-b2b1-6b50de28d761",
          "city": "10126",
          "area": "Gandhinagar",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "pvbiaxrj3epnpvd3keab",
          "cuisines": [
            "American"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 46,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 55,
          "slaString": "45-55 MINS",
          "lastMileTravel": 11.699999809265137,
          "slugs": {
            "restaurant": "bfc-balusumoodi-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "23-4-72, Town Hall Rd, Gunupudi, Bhimavaram, Andhra Pradesh 534201",
          "locality": "Juvvalapalem Road",
          "parentId": 7675,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "178225",
            "deliveryTime": 46,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 55,
            "lastMileTravel": 11.699999809265137,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "442985",
          "name": "Suprabath Foods",
          "uuid": "8b301df4-8510-4793-b6d3-00f295db081f",
          "city": "10126",
          "area": "Somavaram",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "vwpqulyensbvjdhaqaue",
          "cuisines": [
            "Chinese",
            "Indian",
            "Biryani",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 50,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 55,
          "slaString": "45-55 MINS",
          "lastMileTravel": 12.300000190734863,
          "slugs": {
            "restaurant": "suprabath-foods-somavaram-somavaram",
            "city": "bhimavaram"
          },
          "cityState": "10126",
          "address": "D.No.3-1-87,Sreenilayam,Undi Road,Bhimavaram,West Godavari,Andhra Pradesh-534202",
          "locality": "Somavaram",
          "parentId": 266845,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "12.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "442985",
            "deliveryTime": 50,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 55,
            "lastMileTravel": 12.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      }
];



const HeaderCompoenent = () => {
    return (
       <div className='headerComponent'>
           <Title/>
           <NavBar/>
       </div>
    );
}

const Title = () => {
    return (
        <div className='Title'>
            <img src={logo} alt="" />
            <h2>Bhojanalayam</h2>
        </div>
    );
}

const NavBar = () => {
    return(
        <div className='NavBar'>
           
        <ul>
            <li key='1' className='Search'> <BiSearchAlt/>  Search</li>
            <li key='2'> <TbDiscount2/> Offer</li>
            <li key='3'> <IoHelpBuoyOutline/>Help</li>
            <li key='4'> <VscAccount/> Gandhi</li>     
            <li key='5'> <AiOutlineShoppingCart/> Cart</li>       
        </ul>
        </div>        
        
    );
}


const BodyCompoenent = () => {
    return (
        <div className='RestaurantCard'>
            {                
                    resturantData.map( (resturant) => {
                        return(
                            <RestaurantCard {...resturant.data}/>
                        );                       
                    })
            }
        </div>
    );
}

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString, aggregatedDiscountInfo}) => {
    return(
            <div className='Card'>
                <div className='CardImg'>
                    <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId}/>
                </div>
                <div className='CardTitle'>
                    <span className='Name'>{name}</span>
                    <br />
                    <span className='Cuisines'>{cuisines.join(', ')}</span>
                </div>
                <div className='CardDetails'>
                    {deliveryTime} | {costForTwoString} 
                </div>
                <div></div>

                <span className='ribbon4' style={ {'background' : +avgRating > 3.5 ? '#48c479' : +avgRating > 2.5 ? '#db7c38' : +avgRating > 0? 'red' : 'grey'} }>
                    <AiFillStar/>
                    {avgRating} 
                </span>
            </div>
    );
}













const Application = () => {
    return (
        <React.Fragment>
            <HeaderCompoenent/>
            <BodyCompoenent/>
        </React.Fragment>
    );
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Application/>);

