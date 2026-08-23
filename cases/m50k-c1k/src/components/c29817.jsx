import React from 'react';
const LABEL_29817 = 'component_29817';
export function Component29817({ value = 29817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29817, 'data-value': derived.doubled }, children);
}
export default Component29817;
