import React from 'react';
const LABEL_23170 = 'component_23170';
export function Component23170({ value = 23170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23170, 'data-value': derived.doubled }, children);
}
export default Component23170;
