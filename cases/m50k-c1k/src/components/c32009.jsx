import React from 'react';
const LABEL_32009 = 'component_32009';
export function Component32009({ value = 32009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32009, 'data-value': derived.doubled }, children);
}
export default Component32009;
