import React from 'react';
const LABEL_38398 = 'component_38398';
export function Component38398({ value = 38398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38398, 'data-value': derived.doubled }, children);
}
export default Component38398;
