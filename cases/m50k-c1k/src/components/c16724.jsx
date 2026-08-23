import React from 'react';
const LABEL_16724 = 'component_16724';
export function Component16724({ value = 16724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16724, 'data-value': derived.doubled }, children);
}
export default Component16724;
