import React from 'react';
const LABEL_23065 = 'component_23065';
export function Component23065({ value = 23065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23065, 'data-value': derived.doubled }, children);
}
export default Component23065;
