import React from 'react';
const LABEL_23558 = 'component_23558';
export function Component23558({ value = 23558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23558, 'data-value': derived.doubled }, children);
}
export default Component23558;
