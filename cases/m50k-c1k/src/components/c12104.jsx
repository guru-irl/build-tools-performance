import React from 'react';
const LABEL_12104 = 'component_12104';
export function Component12104({ value = 12104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12104, 'data-value': derived.doubled }, children);
}
export default Component12104;
