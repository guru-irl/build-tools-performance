import React from 'react';
const LABEL_1631 = 'component_1631';
export function Component1631({ value = 1631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1631, 'data-value': derived.doubled }, children);
}
export default Component1631;
