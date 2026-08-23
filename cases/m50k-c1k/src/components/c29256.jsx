import React from 'react';
const LABEL_29256 = 'component_29256';
export function Component29256({ value = 29256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29256, 'data-value': derived.doubled }, children);
}
export default Component29256;
