import React from 'react';
const LABEL_10904 = 'component_10904';
export function Component10904({ value = 10904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10904, 'data-value': derived.doubled }, children);
}
export default Component10904;
