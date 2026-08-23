import React from 'react';
const LABEL_22840 = 'component_22840';
export function Component22840({ value = 22840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22840, 'data-value': derived.doubled }, children);
}
export default Component22840;
