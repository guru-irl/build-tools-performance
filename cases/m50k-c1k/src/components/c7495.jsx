import React from 'react';
const LABEL_7495 = 'component_7495';
export function Component7495({ value = 7495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7495, 'data-value': derived.doubled }, children);
}
export default Component7495;
