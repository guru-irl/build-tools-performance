import React from 'react';
const LABEL_43653 = 'component_43653';
export function Component43653({ value = 43653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43653, 'data-value': derived.doubled }, children);
}
export default Component43653;
