import React from 'react';
const LABEL_23135 = 'component_23135';
export function Component23135({ value = 23135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23135, 'data-value': derived.doubled }, children);
}
export default Component23135;
