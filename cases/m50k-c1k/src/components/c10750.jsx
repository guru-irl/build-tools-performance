import React from 'react';
const LABEL_10750 = 'component_10750';
export function Component10750({ value = 10750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10750, 'data-value': derived.doubled }, children);
}
export default Component10750;
