import React from 'react';
const LABEL_25474 = 'component_25474';
export function Component25474({ value = 25474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25474, 'data-value': derived.doubled }, children);
}
export default Component25474;
