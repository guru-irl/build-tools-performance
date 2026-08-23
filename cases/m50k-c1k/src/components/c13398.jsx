import React from 'react';
const LABEL_13398 = 'component_13398';
export function Component13398({ value = 13398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13398, 'data-value': derived.doubled }, children);
}
export default Component13398;
