import React from 'react';
const LABEL_24787 = 'component_24787';
export function Component24787({ value = 24787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24787, 'data-value': derived.doubled }, children);
}
export default Component24787;
