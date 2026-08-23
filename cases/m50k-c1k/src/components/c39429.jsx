import React from 'react';
const LABEL_39429 = 'component_39429';
export function Component39429({ value = 39429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39429, 'data-value': derived.doubled }, children);
}
export default Component39429;
