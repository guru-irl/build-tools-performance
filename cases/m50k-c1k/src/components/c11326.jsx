import React from 'react';
const LABEL_11326 = 'component_11326';
export function Component11326({ value = 11326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11326, 'data-value': derived.doubled }, children);
}
export default Component11326;
