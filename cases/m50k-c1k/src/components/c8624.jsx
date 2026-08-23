import React from 'react';
const LABEL_8624 = 'component_8624';
export function Component8624({ value = 8624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8624, 'data-value': derived.doubled }, children);
}
export default Component8624;
