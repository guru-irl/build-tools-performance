import React from 'react';
const LABEL_34529 = 'component_34529';
export function Component34529({ value = 34529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34529, 'data-value': derived.doubled }, children);
}
export default Component34529;
