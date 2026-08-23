import React from 'react';
const LABEL_46817 = 'component_46817';
export function Component46817({ value = 46817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46817, 'data-value': derived.doubled }, children);
}
export default Component46817;
