import React from 'react';
const LABEL_22830 = 'component_22830';
export function Component22830({ value = 22830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22830, 'data-value': derived.doubled }, children);
}
export default Component22830;
