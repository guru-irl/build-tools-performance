import React from 'react';
const LABEL_32778 = 'component_32778';
export function Component32778({ value = 32778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32778, 'data-value': derived.doubled }, children);
}
export default Component32778;
