import React from 'react';
const LABEL_1469 = 'component_1469';
export function Component1469({ value = 1469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1469, 'data-value': derived.doubled }, children);
}
export default Component1469;
