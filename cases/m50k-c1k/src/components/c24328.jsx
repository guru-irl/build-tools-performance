import React from 'react';
const LABEL_24328 = 'component_24328';
export function Component24328({ value = 24328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24328, 'data-value': derived.doubled }, children);
}
export default Component24328;
