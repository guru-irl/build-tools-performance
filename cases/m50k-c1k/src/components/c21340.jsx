import React from 'react';
const LABEL_21340 = 'component_21340';
export function Component21340({ value = 21340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21340, 'data-value': derived.doubled }, children);
}
export default Component21340;
