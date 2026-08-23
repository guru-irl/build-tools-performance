import React from 'react';
const LABEL_32667 = 'component_32667';
export function Component32667({ value = 32667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32667, 'data-value': derived.doubled }, children);
}
export default Component32667;
