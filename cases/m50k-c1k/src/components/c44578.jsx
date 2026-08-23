import React from 'react';
const LABEL_44578 = 'component_44578';
export function Component44578({ value = 44578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44578, 'data-value': derived.doubled }, children);
}
export default Component44578;
