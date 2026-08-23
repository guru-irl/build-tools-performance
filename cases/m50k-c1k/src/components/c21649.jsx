import React from 'react';
const LABEL_21649 = 'component_21649';
export function Component21649({ value = 21649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21649, 'data-value': derived.doubled }, children);
}
export default Component21649;
