import React from 'react';
const LABEL_28092 = 'component_28092';
export function Component28092({ value = 28092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28092, 'data-value': derived.doubled }, children);
}
export default Component28092;
