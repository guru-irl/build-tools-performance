import React from 'react';
const LABEL_762 = 'component_762';
export function Component762({ value = 762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_762, 'data-value': derived.doubled }, children);
}
export default Component762;
