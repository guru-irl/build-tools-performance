import React from 'react';
const LABEL_28149 = 'component_28149';
export function Component28149({ value = 28149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28149, 'data-value': derived.doubled }, children);
}
export default Component28149;
