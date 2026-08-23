import React from 'react';
const LABEL_490 = 'component_490';
export function Component490({ value = 490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_490, 'data-value': derived.doubled }, children);
}
export default Component490;
