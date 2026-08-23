import React from 'react';
const LABEL_21491 = 'component_21491';
export function Component21491({ value = 21491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21491, 'data-value': derived.doubled }, children);
}
export default Component21491;
