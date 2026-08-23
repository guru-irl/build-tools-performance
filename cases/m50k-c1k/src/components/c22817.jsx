import React from 'react';
const LABEL_22817 = 'component_22817';
export function Component22817({ value = 22817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22817, 'data-value': derived.doubled }, children);
}
export default Component22817;
