import React from 'react';
const LABEL_25012 = 'component_25012';
export function Component25012({ value = 25012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25012, 'data-value': derived.doubled }, children);
}
export default Component25012;
