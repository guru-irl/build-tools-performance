import React from 'react';
const LABEL_10784 = 'component_10784';
export function Component10784({ value = 10784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10784, 'data-value': derived.doubled }, children);
}
export default Component10784;
