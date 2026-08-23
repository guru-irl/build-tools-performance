import React from 'react';
const LABEL_5784 = 'component_5784';
export function Component5784({ value = 5784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5784, 'data-value': derived.doubled }, children);
}
export default Component5784;
