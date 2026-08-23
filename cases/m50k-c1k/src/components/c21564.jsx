import React from 'react';
const LABEL_21564 = 'component_21564';
export function Component21564({ value = 21564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21564, 'data-value': derived.doubled }, children);
}
export default Component21564;
