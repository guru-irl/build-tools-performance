import React from 'react';
const LABEL_23216 = 'component_23216';
export function Component23216({ value = 23216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23216, 'data-value': derived.doubled }, children);
}
export default Component23216;
