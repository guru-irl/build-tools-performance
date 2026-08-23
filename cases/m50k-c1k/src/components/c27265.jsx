import React from 'react';
const LABEL_27265 = 'component_27265';
export function Component27265({ value = 27265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27265, 'data-value': derived.doubled }, children);
}
export default Component27265;
