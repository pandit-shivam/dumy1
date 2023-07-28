// import React from 'react'
// import { Link } from 'react-router-dom'
// // import {OptionOne} from './Components/OptionOne'
// // import {card} from './reactstrap'
// import { Card } from "reactstrap"
import Account from './Account';
import Language from './Language';
import './ListTaskStyle.css'
// import Account from './Account'
// import { useState } from 'react'


// const ListTask = () => {

//   const [filePath, setFilePath] = useState('');

//   const handleClick = (Account) => {
//     setFilePath(Account);
//   };

//   const openFile = () => {
//     window.open(filePath, './Account');
//   };


//   return (
//     <div>

//       <div className='ms-3 mt-3' style={{ width: "25%" }}>
//         <Card>
//           <div className=' '>
//             <ul className='' style={{ listStyle: 'none' }}>
//               <ul className='p-1 mt-4 border-bottom'onClick={() => handleClick('./Account.js')}>Account</ul>
//               <li className='p-1 mt-4  border-bottom'  onClick={openFile}>Privacy</li>
//               <li className='p-1 mt-4 border-bottom'>Post and story</li>
//               <li className='p-1 mt-4 border-bottom'>Notification</li>
//               <li className='p-1 mt-4 border-bottom'>Media & content</li>
//               <li className='p-1 mt-4 border-bottom'>Report a problum</li>
//               <li className='p-1 mt-4'>Language</li>
//             </ul>
//           </div>
//         </Card>
//       </div>

//     </div>


//   )
// }

// export default ListTask
import React, { useState } from 'react';
import Media from './Media';
import Post from './Post';
import Privacy from './Privacy';
import Report from './Report';
import Notification from './Notification';

const VerticalTabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="vertical-tabs-container">
      <div className="tab-header-list gap-2 ms-3">
        {tabs.map((tab, index) => (
          <button 
            key={index}
            className={`tab-header btn btn-outline-danger ${activeTabIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content ml-4">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};


const ListTask = () => {
  const tabs = [
    {
      title: 'Account',
      content: <Account/>,
    },
    {
      title: 'Privacy',
      content: <Language/>,
    },
    {
      title: 'Post and Story',
      content: <Media/>,
    },
    {
      title: 'Notification',
      content: <Notification/>,
    },
    {
      title: 'Moble & Content',
      content: <Post/>,
    },
    {
      title: 'Report a problum',
      content: <Privacy/>
    },
    {
      title: 'Language',
      content:<Report/>
    },
  ];

  return (
    <div>
      <h1>Vertical Tabs Example</h1>
      <VerticalTabs tabs={tabs} />
    </div>
  );
};

export default ListTask;

