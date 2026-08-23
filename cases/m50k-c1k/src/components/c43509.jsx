import React from 'react';
const LABEL_43509 = 'component_43509';
export function Component43509({ value = 43509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43509, 'data-value': derived.doubled }, children);
}
export default Component43509;
