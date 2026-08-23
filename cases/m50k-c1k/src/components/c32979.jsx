import React from 'react';
const LABEL_32979 = 'component_32979';
export function Component32979({ value = 32979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32979, 'data-value': derived.doubled }, children);
}
export default Component32979;
