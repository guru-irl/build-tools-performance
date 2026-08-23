import React from 'react';
const LABEL_14495 = 'component_14495';
export function Component14495({ value = 14495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14495, 'data-value': derived.doubled }, children);
}
export default Component14495;
