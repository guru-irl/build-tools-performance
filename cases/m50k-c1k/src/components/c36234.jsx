import React from 'react';
const LABEL_36234 = 'component_36234';
export function Component36234({ value = 36234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36234, 'data-value': derived.doubled }, children);
}
export default Component36234;
