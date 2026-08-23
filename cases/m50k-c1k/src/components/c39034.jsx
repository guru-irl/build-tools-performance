import React from 'react';
const LABEL_39034 = 'component_39034';
export function Component39034({ value = 39034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39034, 'data-value': derived.doubled }, children);
}
export default Component39034;
