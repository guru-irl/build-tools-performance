import React from 'react';
const LABEL_23757 = 'component_23757';
export function Component23757({ value = 23757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23757, 'data-value': derived.doubled }, children);
}
export default Component23757;
