import React from 'react';
const LABEL_7558 = 'component_7558';
export function Component7558({ value = 7558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7558, 'data-value': derived.doubled }, children);
}
export default Component7558;
