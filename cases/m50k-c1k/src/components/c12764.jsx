import React from 'react';
const LABEL_12764 = 'component_12764';
export function Component12764({ value = 12764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12764, 'data-value': derived.doubled }, children);
}
export default Component12764;
