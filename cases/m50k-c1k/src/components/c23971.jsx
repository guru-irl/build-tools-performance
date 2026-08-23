import React from 'react';
const LABEL_23971 = 'component_23971';
export function Component23971({ value = 23971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23971, 'data-value': derived.doubled }, children);
}
export default Component23971;
