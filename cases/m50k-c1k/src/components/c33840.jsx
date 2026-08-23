import React from 'react';
const LABEL_33840 = 'component_33840';
export function Component33840({ value = 33840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33840, 'data-value': derived.doubled }, children);
}
export default Component33840;
