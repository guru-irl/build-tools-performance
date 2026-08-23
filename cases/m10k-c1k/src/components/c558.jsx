import React from 'react';
const LABEL_558 = 'component_558';
export function Component558({ value = 558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_558, 'data-value': derived.doubled }, children);
}
export default Component558;
