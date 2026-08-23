import React from 'react';
const LABEL_25827 = 'component_25827';
export function Component25827({ value = 25827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25827, 'data-value': derived.doubled }, children);
}
export default Component25827;
