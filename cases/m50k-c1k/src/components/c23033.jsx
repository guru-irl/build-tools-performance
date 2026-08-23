import React from 'react';
const LABEL_23033 = 'component_23033';
export function Component23033({ value = 23033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23033, 'data-value': derived.doubled }, children);
}
export default Component23033;
