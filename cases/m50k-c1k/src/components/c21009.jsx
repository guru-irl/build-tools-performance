import React from 'react';
const LABEL_21009 = 'component_21009';
export function Component21009({ value = 21009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21009, 'data-value': derived.doubled }, children);
}
export default Component21009;
