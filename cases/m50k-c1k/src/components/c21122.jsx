import React from 'react';
const LABEL_21122 = 'component_21122';
export function Component21122({ value = 21122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21122, 'data-value': derived.doubled }, children);
}
export default Component21122;
