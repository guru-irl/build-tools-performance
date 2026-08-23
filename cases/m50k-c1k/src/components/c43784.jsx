import React from 'react';
const LABEL_43784 = 'component_43784';
export function Component43784({ value = 43784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43784, 'data-value': derived.doubled }, children);
}
export default Component43784;
