import React from 'react';
const LABEL_12065 = 'component_12065';
export function Component12065({ value = 12065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12065, 'data-value': derived.doubled }, children);
}
export default Component12065;
