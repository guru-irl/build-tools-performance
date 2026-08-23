import React from 'react';
const LABEL_32130 = 'component_32130';
export function Component32130({ value = 32130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32130, 'data-value': derived.doubled }, children);
}
export default Component32130;
