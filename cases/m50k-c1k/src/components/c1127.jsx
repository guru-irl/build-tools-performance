import React from 'react';
const LABEL_1127 = 'component_1127';
export function Component1127({ value = 1127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1127, 'data-value': derived.doubled }, children);
}
export default Component1127;
