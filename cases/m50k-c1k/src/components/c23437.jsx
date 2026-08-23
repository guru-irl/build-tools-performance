import React from 'react';
const LABEL_23437 = 'component_23437';
export function Component23437({ value = 23437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23437, 'data-value': derived.doubled }, children);
}
export default Component23437;
