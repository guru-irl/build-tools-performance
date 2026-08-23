import React from 'react';
const LABEL_23991 = 'component_23991';
export function Component23991({ value = 23991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23991, 'data-value': derived.doubled }, children);
}
export default Component23991;
