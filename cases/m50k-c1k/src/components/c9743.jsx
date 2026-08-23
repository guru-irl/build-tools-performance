import React from 'react';
const LABEL_9743 = 'component_9743';
export function Component9743({ value = 9743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9743, 'data-value': derived.doubled }, children);
}
export default Component9743;
