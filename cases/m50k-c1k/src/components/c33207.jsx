import React from 'react';
const LABEL_33207 = 'component_33207';
export function Component33207({ value = 33207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33207, 'data-value': derived.doubled }, children);
}
export default Component33207;
