import React from 'react';
const LABEL_10913 = 'component_10913';
export function Component10913({ value = 10913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10913, 'data-value': derived.doubled }, children);
}
export default Component10913;
