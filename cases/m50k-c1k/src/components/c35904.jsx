import React from 'react';
const LABEL_35904 = 'component_35904';
export function Component35904({ value = 35904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35904, 'data-value': derived.doubled }, children);
}
export default Component35904;
