import React from 'react';
const LABEL_37118 = 'component_37118';
export function Component37118({ value = 37118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37118, 'data-value': derived.doubled }, children);
}
export default Component37118;
