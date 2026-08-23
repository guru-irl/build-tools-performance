import React from 'react';
const LABEL_28762 = 'component_28762';
export function Component28762({ value = 28762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28762, 'data-value': derived.doubled }, children);
}
export default Component28762;
