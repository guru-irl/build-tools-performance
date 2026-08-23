import React from 'react';
const LABEL_23778 = 'component_23778';
export function Component23778({ value = 23778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23778, 'data-value': derived.doubled }, children);
}
export default Component23778;
