import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StorefrontIcon from '@material-ui/icons/Storefront';
import './ShoesBrand.scss';
import { Link } from 'react-router-dom';
import { createAction } from '../../Redux/Action';

function ShoesBrand(props) {
  const dataShoes = useSelector((item) => item.ShoesReducer.shoe);
  const idParams = props.match.params.id;

  const player = useSelector((state) => state.ShoesReducer.player);

  const dispatch = useDispatch();
  //Dispatch Shoe In Store Redux
  const handleShoeDetail = (item) => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
    dispatch(createAction('ITEM-DETAIL', item));
  };
  //Render Player
  const renderPlayer = () => {
    return player.map((item) => {
      return (
        <div key={item.id} className="shoe__items__player">
          <div className="shoe__items__player__image">
            <Link
              to={`/${item.idType}`}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: `smooth`,
                })
              }
            >
              <img src={item.linkImage} alt={`player-${item.idType}`} />
            </Link>
          </div>
        </div>
      );
    });
  };
  const renderDataShoeBrandName = () => {
    return dataShoes
      .filter((item) => item.brand === idParams)
      .map((item) => {
        return (
          <div key={item.id} className="shoe__items__item">
            <Link
              to={`/shoe-detail/${item.id}`}
              onClick={() => handleShoeDetail(item)}
            >
              <div className="shoe__items__item__image">
                <img src={item.linkImage} alt={`img-shoe${item.id}`} />
              </div>
            </Link>
            <div className="shoe__items__item__name">
              <h3>{item.typeName}</h3>
              <h1>{item.name}</h1>
            </div>
            <div className="shoe__items__item__price">
              <div className="shoe__items__item__price__money">
                {item.priceDiscount === null ? (
                  <span>
                    {item.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                ) : (
                  <div>
                    <del>
                      {item.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </del>
                    <span>
                      {item.priceDiscount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                  </div>
                )}
              </div>
              <Link
                to={`/shoe-detail/${item.id}`}
                onClick={() => handleShoeDetail(item)}
              >
                <div className="shoe__items__item__price__iconCard">
                  <StorefrontIcon />
                </div>
              </Link>
            </div>
          </div>
        );
      });
  };
  return (
    <div className="shoe">
      <div className="shoe__items">{renderDataShoeBrandName()}</div>
      <h1 className="shoe__titleClothes">SELECT YOUR PLAYER</h1>
      <div className="shoe__items">{renderPlayer()}</div>
    </div>
  );
}

export default ShoesBrand;
