import React from 'react';
const LABEL_37649 = 'component_37649';
export function Component37649({ value = 37649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37649, 'data-value': derived.doubled }, children);
}
export default Component37649;
