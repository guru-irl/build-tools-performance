import React from 'react';
const LABEL_20644 = 'component_20644';
export function Component20644({ value = 20644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20644, 'data-value': derived.doubled }, children);
}
export default Component20644;
