import React from 'react';
const LABEL_6817 = 'component_6817';
export function Component6817({ value = 6817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6817, 'data-value': derived.doubled }, children);
}
export default Component6817;
