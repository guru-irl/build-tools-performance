import React from 'react';
const LABEL_29037 = 'component_29037';
export function Component29037({ value = 29037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29037, 'data-value': derived.doubled }, children);
}
export default Component29037;
