import React from 'react';
const LABEL_36148 = 'component_36148';
export function Component36148({ value = 36148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36148, 'data-value': derived.doubled }, children);
}
export default Component36148;
