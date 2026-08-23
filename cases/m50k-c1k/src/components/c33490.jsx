import React from 'react';
const LABEL_33490 = 'component_33490';
export function Component33490({ value = 33490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33490, 'data-value': derived.doubled }, children);
}
export default Component33490;
