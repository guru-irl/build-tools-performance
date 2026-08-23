import React from 'react';
const LABEL_43178 = 'component_43178';
export function Component43178({ value = 43178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43178, 'data-value': derived.doubled }, children);
}
export default Component43178;
