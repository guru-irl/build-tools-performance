import React from 'react';
const LABEL_39981 = 'component_39981';
export function Component39981({ value = 39981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39981, 'data-value': derived.doubled }, children);
}
export default Component39981;
