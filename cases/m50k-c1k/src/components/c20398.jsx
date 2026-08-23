import React from 'react';
const LABEL_20398 = 'component_20398';
export function Component20398({ value = 20398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20398, 'data-value': derived.doubled }, children);
}
export default Component20398;
