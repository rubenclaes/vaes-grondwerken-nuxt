import { ActionContext, ActionTree } from 'vuex/types';
import { RootState } from '../type';
import { CartState } from './types';

/**
 * Action context specific to DiningDays module
 */
interface CartActionContext extends ActionContext<CartState, RootState> {}

/**
 * Cart actions
 */
export const actions: ActionTree<CartState, RootState> = {
  checkout({ commit, state }, products) {
    // save the items currently in the cart
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);

    // clear the cart
    commit('setCartItems', { items: [] });
    // send out checkout request, and optimistically
    commit('setCheckoutStatus', 'request');
    // the shop API accepts a success callback and a failure callback

    /*  shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    ); */
  },

  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    //if (product.inventory > 0) {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
      commit('pushProductToCart', { id: product.id });
    } else {
      commit('incrementItemQuantity', cartItem);
    }

    // remove 1 item from stock
    /*  commit(
      'products/decrementProductInventory',
      { id: product.id },
      { root: true }
    ); */
    //}
  }
};

export default actions;
