import React from 'react';
const LABEL_6053 = 'component_6053';
export function Component6053({ value = 6053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6053, 'data-value': derived.doubled }, children);
}
export default Component6053;
