import React from 'react';
const LABEL_32093 = 'component_32093';
export function Component32093({ value = 32093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32093, 'data-value': derived.doubled }, children);
}
export default Component32093;
