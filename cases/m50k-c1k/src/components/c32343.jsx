import React from 'react';
const LABEL_32343 = 'component_32343';
export function Component32343({ value = 32343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32343, 'data-value': derived.doubled }, children);
}
export default Component32343;
