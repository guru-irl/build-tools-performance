import React from 'react';
const LABEL_16093 = 'component_16093';
export function Component16093({ value = 16093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16093, 'data-value': derived.doubled }, children);
}
export default Component16093;
