import React from 'react';
const LABEL_22475 = 'component_22475';
export function Component22475({ value = 22475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22475, 'data-value': derived.doubled }, children);
}
export default Component22475;
