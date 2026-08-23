import React from 'react';
const LABEL_36495 = 'component_36495';
export function Component36495({ value = 36495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36495, 'data-value': derived.doubled }, children);
}
export default Component36495;
