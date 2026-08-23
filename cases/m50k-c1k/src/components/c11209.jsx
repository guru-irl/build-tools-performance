import React from 'react';
const LABEL_11209 = 'component_11209';
export function Component11209({ value = 11209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11209, 'data-value': derived.doubled }, children);
}
export default Component11209;
