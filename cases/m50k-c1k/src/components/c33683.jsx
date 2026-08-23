import React from 'react';
const LABEL_33683 = 'component_33683';
export function Component33683({ value = 33683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33683, 'data-value': derived.doubled }, children);
}
export default Component33683;
