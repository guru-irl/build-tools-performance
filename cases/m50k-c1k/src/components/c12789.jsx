import React from 'react';
const LABEL_12789 = 'component_12789';
export function Component12789({ value = 12789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12789, 'data-value': derived.doubled }, children);
}
export default Component12789;
