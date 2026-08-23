import React from 'react';
const LABEL_44528 = 'component_44528';
export function Component44528({ value = 44528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44528, 'data-value': derived.doubled }, children);
}
export default Component44528;
