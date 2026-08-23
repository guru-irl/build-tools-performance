import React from 'react';
const LABEL_1459 = 'component_1459';
export function Component1459({ value = 1459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1459, 'data-value': derived.doubled }, children);
}
export default Component1459;
