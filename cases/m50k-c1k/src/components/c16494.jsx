import React from 'react';
const LABEL_16494 = 'component_16494';
export function Component16494({ value = 16494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16494, 'data-value': derived.doubled }, children);
}
export default Component16494;
