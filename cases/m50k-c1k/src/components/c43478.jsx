import React from 'react';
const LABEL_43478 = 'component_43478';
export function Component43478({ value = 43478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43478, 'data-value': derived.doubled }, children);
}
export default Component43478;
