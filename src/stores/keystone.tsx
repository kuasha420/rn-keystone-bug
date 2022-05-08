import {computed} from 'mobx';
import {Model, model, modelAction, prop} from 'mobx-keystone';
import React from 'react';

type ColorSchemes = 'light' | 'dark' | null;

@model('KeystoneStore')
class KeystoneStore extends Model({
  userColorScheme: prop<ColorSchemes>(null),
}) {
  @modelAction
  setUserColorScheme(colorScheme: ColorSchemes | 'auto') {
    if (colorScheme === 'auto') {
      this.userColorScheme = null;
    } else {
      this.userColorScheme = colorScheme;
    }
  }

  @computed
  get currentColorScheme() {
    if (this.userColorScheme) {
      return this.userColorScheme;
    }
    return 'auto';
  }
}

const keystoneStore = new KeystoneStore({});

const KeystoneStoreContext = React.createContext<KeystoneStore | null>(null);

export const KeystoneProvider: React.FC = ({children}) => {
  return (
    <KeystoneStoreContext.Provider value={keystoneStore}>
      {children}
    </KeystoneStoreContext.Provider>
  );
};

export const useKeystoneStore = () => {
  const store = React.useContext(KeystoneStoreContext);
  if (!store) {
    throw new Error('useKeystoneStore must be used within a KeystoneProvider');
  }
  return store;
};
