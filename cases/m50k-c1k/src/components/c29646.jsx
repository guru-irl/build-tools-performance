import React from 'react';
const LABEL_29646 = 'component_29646';
export function Component29646({ value = 29646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29646, 'data-value': derived.doubled }, children);
}
export default Component29646;
