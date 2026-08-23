import React from 'react';
const LABEL_22367 = 'component_22367';
export function Component22367({ value = 22367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22367, 'data-value': derived.doubled }, children);
}
export default Component22367;
