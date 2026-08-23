import React from 'react';
const LABEL_15398 = 'component_15398';
export function Component15398({ value = 15398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15398, 'data-value': derived.doubled }, children);
}
export default Component15398;
