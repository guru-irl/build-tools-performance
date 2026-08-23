import React from 'react';
const LABEL_23426 = 'component_23426';
export function Component23426({ value = 23426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23426, 'data-value': derived.doubled }, children);
}
export default Component23426;
