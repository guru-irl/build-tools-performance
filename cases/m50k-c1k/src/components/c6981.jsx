import React from 'react';
const LABEL_6981 = 'component_6981';
export function Component6981({ value = 6981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6981, 'data-value': derived.doubled }, children);
}
export default Component6981;
