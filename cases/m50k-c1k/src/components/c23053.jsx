import React from 'react';
const LABEL_23053 = 'component_23053';
export function Component23053({ value = 23053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23053, 'data-value': derived.doubled }, children);
}
export default Component23053;
