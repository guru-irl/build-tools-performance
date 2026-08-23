import React from 'react';
const LABEL_21118 = 'component_21118';
export function Component21118({ value = 21118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21118, 'data-value': derived.doubled }, children);
}
export default Component21118;
