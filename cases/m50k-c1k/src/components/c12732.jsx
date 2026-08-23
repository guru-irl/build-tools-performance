import React from 'react';
const LABEL_12732 = 'component_12732';
export function Component12732({ value = 12732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12732, 'data-value': derived.doubled }, children);
}
export default Component12732;
