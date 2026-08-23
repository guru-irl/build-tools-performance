import React from 'react';
const LABEL_37784 = 'component_37784';
export function Component37784({ value = 37784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37784, 'data-value': derived.doubled }, children);
}
export default Component37784;
