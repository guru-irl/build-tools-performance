import React from 'react';
const LABEL_10341 = 'component_10341';
export function Component10341({ value = 10341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10341, 'data-value': derived.doubled }, children);
}
export default Component10341;
