import React from 'react';
const LABEL_37375 = 'component_37375';
export function Component37375({ value = 37375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37375, 'data-value': derived.doubled }, children);
}
export default Component37375;
