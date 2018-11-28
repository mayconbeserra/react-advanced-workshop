import React, { useState } from 'react';

export const TabsContext = React.createContext({});

export default ({ children, value, onChange, initialValue }) => {
  const [selectedTab, selectTab] = useState(initialValue);

  return (
    <TabsContext.Provider
      value={{
        selectedTab: value || selectedTab,
        selectTab: onChange || selectTab
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
