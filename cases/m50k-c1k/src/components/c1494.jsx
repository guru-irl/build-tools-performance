import React from 'react';
const LABEL_1494 = 'component_1494';
export function Component1494({ value = 1494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1494, 'data-value': derived.doubled }, children);
}
export default Component1494;
