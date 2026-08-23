import React from 'react';
const LABEL_1533 = 'component_1533';
export function Component1533({ value = 1533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1533, 'data-value': derived.doubled }, children);
}
export default Component1533;
