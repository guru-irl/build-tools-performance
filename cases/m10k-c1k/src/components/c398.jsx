import React from 'react';
const LABEL_398 = 'component_398';
export function Component398({ value = 398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_398, 'data-value': derived.doubled }, children);
}
export default Component398;
