import React from 'react';
const LABEL_42529 = 'component_42529';
export function Component42529({ value = 42529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42529, 'data-value': derived.doubled }, children);
}
export default Component42529;
