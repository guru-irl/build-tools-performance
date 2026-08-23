import React from 'react';
const LABEL_35558 = 'component_35558';
export function Component35558({ value = 35558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35558, 'data-value': derived.doubled }, children);
}
export default Component35558;
