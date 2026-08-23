import React from 'react';
const LABEL_1636 = 'component_1636';
export function Component1636({ value = 1636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1636, 'data-value': derived.doubled }, children);
}
export default Component1636;
