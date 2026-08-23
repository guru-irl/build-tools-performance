import React from 'react';
const LABEL_46784 = 'component_46784';
export function Component46784({ value = 46784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46784, 'data-value': derived.doubled }, children);
}
export default Component46784;
