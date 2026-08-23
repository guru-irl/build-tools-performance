import React from 'react';
const LABEL_43378 = 'component_43378';
export function Component43378({ value = 43378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43378, 'data-value': derived.doubled }, children);
}
export default Component43378;
