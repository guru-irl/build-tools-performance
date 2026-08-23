import React from 'react';
const LABEL_16762 = 'component_16762';
export function Component16762({ value = 16762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16762, 'data-value': derived.doubled }, children);
}
export default Component16762;
