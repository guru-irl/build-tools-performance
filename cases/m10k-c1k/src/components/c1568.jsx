import React from 'react';
const LABEL_1568 = 'component_1568';
export function Component1568({ value = 1568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1568, 'data-value': derived.doubled }, children);
}
export default Component1568;
