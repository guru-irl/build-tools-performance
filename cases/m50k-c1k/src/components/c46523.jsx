import React from 'react';
const LABEL_46523 = 'component_46523';
export function Component46523({ value = 46523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46523, 'data-value': derived.doubled }, children);
}
export default Component46523;
