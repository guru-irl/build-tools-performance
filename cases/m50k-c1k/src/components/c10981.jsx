import React from 'react';
const LABEL_10981 = 'component_10981';
export function Component10981({ value = 10981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10981, 'data-value': derived.doubled }, children);
}
export default Component10981;
