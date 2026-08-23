import React from 'react';
const LABEL_7398 = 'component_7398';
export function Component7398({ value = 7398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7398, 'data-value': derived.doubled }, children);
}
export default Component7398;
