import React from 'react';
const LABEL_35784 = 'component_35784';
export function Component35784({ value = 35784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35784, 'data-value': derived.doubled }, children);
}
export default Component35784;
