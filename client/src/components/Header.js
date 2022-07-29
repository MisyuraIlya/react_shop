import React, { useContext } from 'react';
import MyButton from './button/MyButton';
import { Context } from '../index';
import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
const Header = observer(() => {
  const {user} = useContext(Context);
    return (
      <div className='flex-container header_container'>
        <Link to={SHOP_ROUTE} className='col-lg-4'><h1>My React SHOP</h1></Link>
          {user.isAuth ?
            <div className='col-lg-8 left_header_content'>
              <MyButton>Admin Panel</MyButton>
              <MyButton>Log out</MyButton>
            </div>
            :
            <div className='col-lg-8 left_header_content'>
              <MyButton onClick={() => user.setIsAuth(true)} >Registration</MyButton>
            </div>
        }

      </div>
    );
});

export default Header;