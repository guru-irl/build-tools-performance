import React from 'react';
const LABEL_12199 = 'component_12199';
export function Component12199({ value = 12199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12199, 'data-value': derived.doubled }, children);
}
export default Component12199;
