import React from 'react';
const LABEL_21065 = 'component_21065';
export function Component21065({ value = 21065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21065, 'data-value': derived.doubled }, children);
}
export default Component21065;
