import React from 'react';
const LABEL_1592 = 'component_1592';
export function Component1592({ value = 1592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1592, 'data-value': derived.doubled }, children);
}
export default Component1592;
