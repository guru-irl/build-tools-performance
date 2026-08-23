import React from 'react';
const LABEL_24724 = 'component_24724';
export function Component24724({ value = 24724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24724, 'data-value': derived.doubled }, children);
}
export default Component24724;
