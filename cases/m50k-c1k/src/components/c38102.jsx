import React from 'react';
const LABEL_38102 = 'component_38102';
export function Component38102({ value = 38102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38102, 'data-value': derived.doubled }, children);
}
export default Component38102;
