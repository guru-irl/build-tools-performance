import React from 'react';
const LABEL_25784 = 'component_25784';
export function Component25784({ value = 25784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25784, 'data-value': derived.doubled }, children);
}
export default Component25784;
