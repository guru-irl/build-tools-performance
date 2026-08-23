import React from 'react';
const LABEL_23981 = 'component_23981';
export function Component23981({ value = 23981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23981, 'data-value': derived.doubled }, children);
}
export default Component23981;
