import React, { useReducer } from 'react';
import CartContext from './cartcontext';

// Création de l'état par défaut du panier à utiliser dans la fonction de réduction et l'état par défaut du hook de réduction;
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//FIN

// La fonction de réduction du panier
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // Calcul du montant total en ajoutant le prix de l'article multiplié par la quantité
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Ajout de chaque nouvel élément au panier
    const updatedItems = [...state.items, action.item];

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    // Trouver l'index de l'article dans le panier
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    // Calcul du nouveau montant total après suppression de l'article
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // Mise à jour de la quantité de l'article s'il en reste plus d'un
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Retourne l'état du panier par défaut si aucune action correspondante n'est trouvée
  return defaultCartState;
};

const CartProvider = (props) => {
  // Utilisation du hook useReducer
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Fonction pour ajouter un article au panier
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  };

  // Fonction pour retirer un article du panier
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  };

  // Définition et automatisation des fonctions du contexte du panier
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  // Rendu de tout le contenu géré par le contexte du panier, en utilisant .Provider pour permettre au contexte de gérer d'autres parties de l'application
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
