import React from 'react';
const LABEL_23342 = 'component_23342';
export function Component23342({ value = 23342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23342, 'data-value': derived.doubled }, children);
}
export default Component23342;
