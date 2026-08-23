import React from 'react';
const LABEL_1562 = 'component_1562';
export function Component1562({ value = 1562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1562, 'data-value': derived.doubled }, children);
}
export default Component1562;
