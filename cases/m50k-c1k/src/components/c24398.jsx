import React from 'react';
const LABEL_24398 = 'component_24398';
export function Component24398({ value = 24398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24398, 'data-value': derived.doubled }, children);
}
export default Component24398;
