import React from 'react';
const LABEL_7724 = 'component_7724';
export function Component7724({ value = 7724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7724, 'data-value': derived.doubled }, children);
}
export default Component7724;
