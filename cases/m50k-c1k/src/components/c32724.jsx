import React from 'react';
const LABEL_32724 = 'component_32724';
export function Component32724({ value = 32724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32724, 'data-value': derived.doubled }, children);
}
export default Component32724;
