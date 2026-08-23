import React from 'react';
const LABEL_24904 = 'component_24904';
export function Component24904({ value = 24904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24904, 'data-value': derived.doubled }, children);
}
export default Component24904;
