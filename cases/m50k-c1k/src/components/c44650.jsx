import React from 'react';
const LABEL_44650 = 'component_44650';
export function Component44650({ value = 44650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44650, 'data-value': derived.doubled }, children);
}
export default Component44650;
