import React from 'react';
const LABEL_39314 = 'component_39314';
export function Component39314({ value = 39314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39314, 'data-value': derived.doubled }, children);
}
export default Component39314;
