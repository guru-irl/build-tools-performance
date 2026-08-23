import React from 'react';
const LABEL_32840 = 'component_32840';
export function Component32840({ value = 32840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32840, 'data-value': derived.doubled }, children);
}
export default Component32840;
