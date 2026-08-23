import React from 'react';
const LABEL_361 = 'component_361';
export function Component361({ value = 361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_361, 'data-value': derived.doubled }, children);
}
export default Component361;
