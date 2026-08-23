import React from 'react';
const LABEL_10495 = 'component_10495';
export function Component10495({ value = 10495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10495, 'data-value': derived.doubled }, children);
}
export default Component10495;
