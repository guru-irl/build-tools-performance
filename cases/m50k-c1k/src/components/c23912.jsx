import React from 'react';
const LABEL_23912 = 'component_23912';
export function Component23912({ value = 23912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23912, 'data-value': derived.doubled }, children);
}
export default Component23912;
