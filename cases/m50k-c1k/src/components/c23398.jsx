import React from 'react';
const LABEL_23398 = 'component_23398';
export function Component23398({ value = 23398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23398, 'data-value': derived.doubled }, children);
}
export default Component23398;
