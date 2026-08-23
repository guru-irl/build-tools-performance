import React from 'react';
const LABEL_32345 = 'component_32345';
export function Component32345({ value = 32345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32345, 'data-value': derived.doubled }, children);
}
export default Component32345;
