import React from 'react';
const LABEL_1160 = 'component_1160';
export function Component1160({ value = 1160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1160, 'data-value': derived.doubled }, children);
}
export default Component1160;
