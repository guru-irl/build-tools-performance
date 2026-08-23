import React from 'react';
const LABEL_29860 = 'component_29860';
export function Component29860({ value = 29860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29860, 'data-value': derived.doubled }, children);
}
export default Component29860;
