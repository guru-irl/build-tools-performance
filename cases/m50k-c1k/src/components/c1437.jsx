import React from 'react';
const LABEL_1437 = 'component_1437';
export function Component1437({ value = 1437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1437, 'data-value': derived.doubled }, children);
}
export default Component1437;
