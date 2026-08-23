import React from 'react';
const LABEL_14817 = 'component_14817';
export function Component14817({ value = 14817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14817, 'data-value': derived.doubled }, children);
}
export default Component14817;
