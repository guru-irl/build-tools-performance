import React from 'react';
const LABEL_21222 = 'component_21222';
export function Component21222({ value = 21222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21222, 'data-value': derived.doubled }, children);
}
export default Component21222;
