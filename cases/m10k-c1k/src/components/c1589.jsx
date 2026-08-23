import React from 'react';
const LABEL_1589 = 'component_1589';
export function Component1589({ value = 1589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1589, 'data-value': derived.doubled }, children);
}
export default Component1589;
