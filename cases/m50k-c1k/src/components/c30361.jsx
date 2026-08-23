import React from 'react';
const LABEL_30361 = 'component_30361';
export function Component30361({ value = 30361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30361, 'data-value': derived.doubled }, children);
}
export default Component30361;
