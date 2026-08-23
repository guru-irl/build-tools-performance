import React from 'react';
const LABEL_39778 = 'component_39778';
export function Component39778({ value = 39778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39778, 'data-value': derived.doubled }, children);
}
export default Component39778;
