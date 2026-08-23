import React from 'react';
const LABEL_34784 = 'component_34784';
export function Component34784({ value = 34784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34784, 'data-value': derived.doubled }, children);
}
export default Component34784;
