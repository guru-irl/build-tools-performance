import React from 'react';
const LABEL_3784 = 'component_3784';
export function Component3784({ value = 3784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3784, 'data-value': derived.doubled }, children);
}
export default Component3784;
