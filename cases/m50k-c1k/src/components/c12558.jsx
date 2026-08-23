import React from 'react';
const LABEL_12558 = 'component_12558';
export function Component12558({ value = 12558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12558, 'data-value': derived.doubled }, children);
}
export default Component12558;
