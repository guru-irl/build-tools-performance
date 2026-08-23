import React from 'react';
const LABEL_1523 = 'component_1523';
export function Component1523({ value = 1523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1523, 'data-value': derived.doubled }, children);
}
export default Component1523;
