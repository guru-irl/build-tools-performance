import React from 'react';
const LABEL_39243 = 'component_39243';
export function Component39243({ value = 39243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39243, 'data-value': derived.doubled }, children);
}
export default Component39243;
