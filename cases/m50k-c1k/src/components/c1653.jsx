import React from 'react';
const LABEL_1653 = 'component_1653';
export function Component1653({ value = 1653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1653, 'data-value': derived.doubled }, children);
}
export default Component1653;
