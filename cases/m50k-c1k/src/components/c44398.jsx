import React from 'react';
const LABEL_44398 = 'component_44398';
export function Component44398({ value = 44398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44398, 'data-value': derived.doubled }, children);
}
export default Component44398;
