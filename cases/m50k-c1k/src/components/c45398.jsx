import React from 'react';
const LABEL_45398 = 'component_45398';
export function Component45398({ value = 45398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45398, 'data-value': derived.doubled }, children);
}
export default Component45398;
