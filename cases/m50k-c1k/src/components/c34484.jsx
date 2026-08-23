import React from 'react';
const LABEL_34484 = 'component_34484';
export function Component34484({ value = 34484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34484, 'data-value': derived.doubled }, children);
}
export default Component34484;
