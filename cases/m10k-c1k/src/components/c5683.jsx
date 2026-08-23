import React from 'react';
const LABEL_5683 = 'component_5683';
export function Component5683({ value = 5683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5683, 'data-value': derived.doubled }, children);
}
export default Component5683;
