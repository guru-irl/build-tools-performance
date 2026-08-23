import React from 'react';
const LABEL_12002 = 'component_12002';
export function Component12002({ value = 12002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12002, 'data-value': derived.doubled }, children);
}
export default Component12002;
