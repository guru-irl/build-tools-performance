import React from 'react';
const LABEL_12724 = 'component_12724';
export function Component12724({ value = 12724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12724, 'data-value': derived.doubled }, children);
}
export default Component12724;
