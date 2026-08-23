import React from 'react';
const LABEL_26339 = 'component_26339';
export function Component26339({ value = 26339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26339, 'data-value': derived.doubled }, children);
}
export default Component26339;
