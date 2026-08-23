import React from 'react';
const LABEL_38784 = 'component_38784';
export function Component38784({ value = 38784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38784, 'data-value': derived.doubled }, children);
}
export default Component38784;
