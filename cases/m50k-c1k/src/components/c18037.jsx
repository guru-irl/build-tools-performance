import React from 'react';
const LABEL_18037 = 'component_18037';
export function Component18037({ value = 18037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18037, 'data-value': derived.doubled }, children);
}
export default Component18037;
