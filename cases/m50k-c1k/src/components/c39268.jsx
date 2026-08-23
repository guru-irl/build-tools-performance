import React from 'react';
const LABEL_39268 = 'component_39268';
export function Component39268({ value = 39268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39268, 'data-value': derived.doubled }, children);
}
export default Component39268;
