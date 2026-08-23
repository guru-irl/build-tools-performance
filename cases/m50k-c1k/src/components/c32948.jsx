import React from 'react';
const LABEL_32948 = 'component_32948';
export function Component32948({ value = 32948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32948, 'data-value': derived.doubled }, children);
}
export default Component32948;
