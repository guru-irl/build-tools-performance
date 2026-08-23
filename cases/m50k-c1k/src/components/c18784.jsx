import React from 'react';
const LABEL_18784 = 'component_18784';
export function Component18784({ value = 18784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18784, 'data-value': derived.doubled }, children);
}
export default Component18784;
