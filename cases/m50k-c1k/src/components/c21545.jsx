import React from 'react';
const LABEL_21545 = 'component_21545';
export function Component21545({ value = 21545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21545, 'data-value': derived.doubled }, children);
}
export default Component21545;
