import React from 'react';
const LABEL_10076 = 'component_10076';
export function Component10076({ value = 10076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10076, 'data-value': derived.doubled }, children);
}
export default Component10076;
