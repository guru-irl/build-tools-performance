import React from 'react';
const LABEL_13724 = 'component_13724';
export function Component13724({ value = 13724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13724, 'data-value': derived.doubled }, children);
}
export default Component13724;
