import React from 'react';
const LABEL_19724 = 'component_19724';
export function Component19724({ value = 19724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19724, 'data-value': derived.doubled }, children);
}
export default Component19724;
