import React from 'react';
const LABEL_39442 = 'component_39442';
export function Component39442({ value = 39442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39442, 'data-value': derived.doubled }, children);
}
export default Component39442;
