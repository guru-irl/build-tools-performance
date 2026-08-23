import React from 'react';
const LABEL_40113 = 'component_40113';
export function Component40113({ value = 40113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40113, 'data-value': derived.doubled }, children);
}
export default Component40113;
