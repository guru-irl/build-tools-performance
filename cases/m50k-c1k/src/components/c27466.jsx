import React from 'react';
const LABEL_27466 = 'component_27466';
export function Component27466({ value = 27466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27466, 'data-value': derived.doubled }, children);
}
export default Component27466;
