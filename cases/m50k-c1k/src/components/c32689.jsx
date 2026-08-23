import React from 'react';
const LABEL_32689 = 'component_32689';
export function Component32689({ value = 32689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32689, 'data-value': derived.doubled }, children);
}
export default Component32689;
