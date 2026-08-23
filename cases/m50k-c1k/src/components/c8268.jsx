import React from 'react';
const LABEL_8268 = 'component_8268';
export function Component8268({ value = 8268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8268, 'data-value': derived.doubled }, children);
}
export default Component8268;
