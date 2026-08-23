import React from 'react';
const LABEL_6784 = 'component_6784';
export function Component6784({ value = 6784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6784, 'data-value': derived.doubled }, children);
}
export default Component6784;
