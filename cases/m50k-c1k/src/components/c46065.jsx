import React from 'react';
const LABEL_46065 = 'component_46065';
export function Component46065({ value = 46065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46065, 'data-value': derived.doubled }, children);
}
export default Component46065;
