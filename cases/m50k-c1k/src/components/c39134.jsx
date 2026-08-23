import React from 'react';
const LABEL_39134 = 'component_39134';
export function Component39134({ value = 39134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39134, 'data-value': derived.doubled }, children);
}
export default Component39134;
