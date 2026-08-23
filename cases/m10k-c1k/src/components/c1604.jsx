import React from 'react';
const LABEL_1604 = 'component_1604';
export function Component1604({ value = 1604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1604, 'data-value': derived.doubled }, children);
}
export default Component1604;
