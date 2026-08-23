import React from 'react';
const LABEL_22065 = 'component_22065';
export function Component22065({ value = 22065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22065, 'data-value': derived.doubled }, children);
}
export default Component22065;
