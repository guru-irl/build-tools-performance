import React from 'react';
const LABEL_24762 = 'component_24762';
export function Component24762({ value = 24762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24762, 'data-value': derived.doubled }, children);
}
export default Component24762;
