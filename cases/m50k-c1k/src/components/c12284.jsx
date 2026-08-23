import React from 'react';
const LABEL_12284 = 'component_12284';
export function Component12284({ value = 12284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12284, 'data-value': derived.doubled }, children);
}
export default Component12284;
