import React from 'react';
const LABEL_22124 = 'component_22124';
export function Component22124({ value = 22124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22124, 'data-value': derived.doubled }, children);
}
export default Component22124;
