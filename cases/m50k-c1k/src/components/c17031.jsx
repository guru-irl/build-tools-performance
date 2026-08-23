import React from 'react';
const LABEL_17031 = 'component_17031';
export function Component17031({ value = 17031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17031, 'data-value': derived.doubled }, children);
}
export default Component17031;
