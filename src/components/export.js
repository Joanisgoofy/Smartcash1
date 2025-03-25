import {MdOutlineArrowDownward } from 'react-icons/md'
import {MdAccountBalance } from 'react-icons/md'
import { MdAddCircleOutline,
     MdSmartphone ,
      MdOutlineNetworkCell ,
       MdReceiptLong,
       MdElectricBolt ,
       MdOutlineLock ,
       MdSportsSoccer
     } from 'react-icons/md'
import { Link } from 'react-router-dom';



export const service = [
    {
        icon: MdOutlineArrowDownward,
        title: 'Withdraw',
       
    },
    {
        icon: MdAccountBalance,
        title: 'Transfer Money',
        
    },
    {
        icon: MdAddCircleOutline,
        title: 'Add Money',
       
    },
    {
        icon: MdSmartphone,
        title: 'Airtime',
       
    },
    {
        icon: MdOutlineNetworkCell,
        title: 'Data',
        
    },
    {
        icon: MdReceiptLong,
        title: 'Pay Bills',
        
    },
    {
        icon : MdElectricBolt,
        title : 'Electricity'
    },
    {
        icon : MdOutlineLock,
        title : 'Safebox'
    },
    {
        icon : MdSportsSoccer,
        title : 'Betting'
    }
];