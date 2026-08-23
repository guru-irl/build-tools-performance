import React from 'react';
const LABEL_15076 = 'component_15076';
export function Component15076({ value = 15076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15076, 'data-value': derived.doubled }, children);
}
export default Component15076;
