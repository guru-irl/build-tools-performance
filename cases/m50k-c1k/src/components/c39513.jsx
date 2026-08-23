import React from 'react';
const LABEL_39513 = 'component_39513';
export function Component39513({ value = 39513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39513, 'data-value': derived.doubled }, children);
}
export default Component39513;
