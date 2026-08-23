import React from 'react';
const LABEL_7369 = 'component_7369';
export function Component7369({ value = 7369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7369, 'data-value': derived.doubled }, children);
}
export default Component7369;
