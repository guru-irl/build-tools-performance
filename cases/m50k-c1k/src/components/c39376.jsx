import React from 'react';
const LABEL_39376 = 'component_39376';
export function Component39376({ value = 39376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39376, 'data-value': derived.doubled }, children);
}
export default Component39376;
