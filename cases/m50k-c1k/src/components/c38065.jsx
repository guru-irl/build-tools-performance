import React from 'react';
const LABEL_38065 = 'component_38065';
export function Component38065({ value = 38065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38065, 'data-value': derived.doubled }, children);
}
export default Component38065;
