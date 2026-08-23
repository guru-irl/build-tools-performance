import React from 'react';
const LABEL_35778 = 'component_35778';
export function Component35778({ value = 35778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35778, 'data-value': derived.doubled }, children);
}
export default Component35778;
