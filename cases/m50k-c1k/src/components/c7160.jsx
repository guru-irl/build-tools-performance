import React from 'react';
const LABEL_7160 = 'component_7160';
export function Component7160({ value = 7160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7160, 'data-value': derived.doubled }, children);
}
export default Component7160;
