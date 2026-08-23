import React from 'react';
const LABEL_1517 = 'component_1517';
export function Component1517({ value = 1517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1517, 'data-value': derived.doubled }, children);
}
export default Component1517;
