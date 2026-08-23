import React from 'react';
const LABEL_36784 = 'component_36784';
export function Component36784({ value = 36784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36784, 'data-value': derived.doubled }, children);
}
export default Component36784;
