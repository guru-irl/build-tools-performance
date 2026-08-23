import React from 'react';
const LABEL_18646 = 'component_18646';
export function Component18646({ value = 18646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18646, 'data-value': derived.doubled }, children);
}
export default Component18646;
