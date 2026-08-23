import React from 'react';
const LABEL_1489 = 'component_1489';
export function Component1489({ value = 1489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1489, 'data-value': derived.doubled }, children);
}
export default Component1489;
