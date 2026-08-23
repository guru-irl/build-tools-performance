import React from 'react';
const LABEL_21073 = 'component_21073';
export function Component21073({ value = 21073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21073, 'data-value': derived.doubled }, children);
}
export default Component21073;
