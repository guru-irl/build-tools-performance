import React from 'react';
const LABEL_32850 = 'component_32850';
export function Component32850({ value = 32850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32850, 'data-value': derived.doubled }, children);
}
export default Component32850;
