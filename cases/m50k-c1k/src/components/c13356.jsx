import React from 'react';
const LABEL_13356 = 'component_13356';
export function Component13356({ value = 13356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13356, 'data-value': derived.doubled }, children);
}
export default Component13356;
