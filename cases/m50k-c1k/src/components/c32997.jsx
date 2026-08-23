import React from 'react';
const LABEL_32997 = 'component_32997';
export function Component32997({ value = 32997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32997, 'data-value': derived.doubled }, children);
}
export default Component32997;
