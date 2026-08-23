import React from 'react';
const LABEL_11330 = 'component_11330';
export function Component11330({ value = 11330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11330, 'data-value': derived.doubled }, children);
}
export default Component11330;
