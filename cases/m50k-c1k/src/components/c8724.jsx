import React from 'react';
const LABEL_8724 = 'component_8724';
export function Component8724({ value = 8724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8724, 'data-value': derived.doubled }, children);
}
export default Component8724;
