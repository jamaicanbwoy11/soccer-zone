import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Search.scss';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { createAction } from '../../Redux/Action';
import { LIST_SEARCH } from '../../Redux/Constants';
function Search() {
  const shoeItem = useSelector((item) => item.ShoesReducer.shoe);
  const search = useSelector((item) => item.ShoesReducer.search);
  const dispatch = useDispatch();

  const handleDetailShoe = (item) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(createAction('ITEM-DETAIL', item));
  };
  const renderShoeSearch = () => {
    return shoeItem
      .filter((val) => {
        if (search === '') {
          return val;
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          //Send List Item Search Redux
          dispatch(createAction(LIST_SEARCH, val));
          // console.log('val', val);
          return val;
        }
      })
      .map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="search__items__item">
              <Link
                to={`/shoe-detail/${item.id}`}
                onClick={() => handleDetailShoe(item)}
              >
                <div className="search__items__item__image">
                  <img src={item.linkImage} alt={`shoe${item.id}`} />
                </div>
              </Link>
              <div className="search__items__item__name">
                <h1>{item.name}</h1>
              </div>
              <div className="search__items__item__priceAndPriceDiscount">
                {item.priceDiscount === null ? (
                  <div className="search__items__item__priceAndPriceDiscount__price">
                    <span>
                      {item.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                    <div>
                      <StorefrontIcon />
                    </div>
                  </div>
                ) : (
                  <div className="search__items__item__priceAndPriceDiscount__priceDiscount">
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
                    <div>
                      <StorefrontIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        );
      });
  };
  return (
    <div className="search">
      <div className="search__select">
        <h1 className="search__title">
          You are looking for:
          {search === '' ? (
            '...'
          ) : (
            <span className="search__title__found">{search}</span>
          )}
        </h1>
        {/* <select>
          <option value="" selected disabled hidden>
            Choose here
          </option>
          <option>LEBRON JAMES</option>
          <option>BLAKE GRIFFIN</option>
          <option>PAUL GEORGE</option>
          <option>KYRIE IRVING</option>
          <option>JIMMY BUTLER</option>
          <option>RUSSELL WESTBROOK</option>
          <option>GIANNIS ANTETOKOUNMPO</option>
          <option>KOBE BRYANT</option>
          <option>MICHAEL JORDAN</option>
          <option>KEVIN DURANT</option>
        </select> */}
      </div>

      <div className="search__items">{renderShoeSearch()}</div>
    </div>
  );
}

export default Search;
