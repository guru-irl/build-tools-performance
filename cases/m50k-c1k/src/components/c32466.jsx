import React from 'react';
const LABEL_32466 = 'component_32466';
export function Component32466({ value = 32466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32466, 'data-value': derived.doubled }, children);
}
export default Component32466;
