import React from 'react';
const LABEL_16062 = 'component_16062';
export function Component16062({ value = 16062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16062, 'data-value': derived.doubled }, children);
}
export default Component16062;
