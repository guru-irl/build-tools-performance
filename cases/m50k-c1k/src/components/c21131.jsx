import React from 'react';
const LABEL_21131 = 'component_21131';
export function Component21131({ value = 21131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21131, 'data-value': derived.doubled }, children);
}
export default Component21131;
