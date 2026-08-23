import React from 'react';
const LABEL_16967 = 'component_16967';
export function Component16967({ value = 16967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16967, 'data-value': derived.doubled }, children);
}
export default Component16967;
