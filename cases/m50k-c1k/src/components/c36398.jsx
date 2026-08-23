import React from 'react';
const LABEL_36398 = 'component_36398';
export function Component36398({ value = 36398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36398, 'data-value': derived.doubled }, children);
}
export default Component36398;
