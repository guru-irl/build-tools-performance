import React from 'react';
const LABEL_32800 = 'component_32800';
export function Component32800({ value = 32800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32800, 'data-value': derived.doubled }, children);
}
export default Component32800;
