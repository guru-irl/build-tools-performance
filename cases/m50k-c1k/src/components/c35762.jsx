import React from 'react';
const LABEL_35762 = 'component_35762';
export function Component35762({ value = 35762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35762, 'data-value': derived.doubled }, children);
}
export default Component35762;
