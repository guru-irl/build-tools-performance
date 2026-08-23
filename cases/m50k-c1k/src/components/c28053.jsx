import React from 'react';
const LABEL_28053 = 'component_28053';
export function Component28053({ value = 28053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28053, 'data-value': derived.doubled }, children);
}
export default Component28053;
