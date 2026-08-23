import React from 'react';
const LABEL_6724 = 'component_6724';
export function Component6724({ value = 6724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6724, 'data-value': derived.doubled }, children);
}
export default Component6724;
