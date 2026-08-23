import React from 'react';
const LABEL_21176 = 'component_21176';
export function Component21176({ value = 21176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21176, 'data-value': derived.doubled }, children);
}
export default Component21176;
