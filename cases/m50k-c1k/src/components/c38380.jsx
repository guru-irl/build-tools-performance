import React from 'react';
const LABEL_38380 = 'component_38380';
export function Component38380({ value = 38380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38380, 'data-value': derived.doubled }, children);
}
export default Component38380;
