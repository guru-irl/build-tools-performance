import React from 'react';
const LABEL_39551 = 'component_39551';
export function Component39551({ value = 39551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39551, 'data-value': derived.doubled }, children);
}
export default Component39551;
