import React from 'react';
const LABEL_37484 = 'component_37484';
export function Component37484({ value = 37484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37484, 'data-value': derived.doubled }, children);
}
export default Component37484;
