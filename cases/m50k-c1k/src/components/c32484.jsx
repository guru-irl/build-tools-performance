import React from 'react';
const LABEL_32484 = 'component_32484';
export function Component32484({ value = 32484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32484, 'data-value': derived.doubled }, children);
}
export default Component32484;
