import React from 'react';
const LABEL_27451 = 'component_27451';
export function Component27451({ value = 27451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27451, 'data-value': derived.doubled }, children);
}
export default Component27451;
