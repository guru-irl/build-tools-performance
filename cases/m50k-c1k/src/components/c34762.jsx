import React from 'react';
const LABEL_34762 = 'component_34762';
export function Component34762({ value = 34762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34762, 'data-value': derived.doubled }, children);
}
export default Component34762;
