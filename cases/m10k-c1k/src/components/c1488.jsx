import React from 'react';
const LABEL_1488 = 'component_1488';
export function Component1488({ value = 1488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1488, 'data-value': derived.doubled }, children);
}
export default Component1488;
