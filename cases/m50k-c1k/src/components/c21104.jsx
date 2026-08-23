import React from 'react';
const LABEL_21104 = 'component_21104';
export function Component21104({ value = 21104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21104, 'data-value': derived.doubled }, children);
}
export default Component21104;
