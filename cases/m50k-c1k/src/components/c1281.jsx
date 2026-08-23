import React from 'react';
const LABEL_1281 = 'component_1281';
export function Component1281({ value = 1281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1281, 'data-value': derived.doubled }, children);
}
export default Component1281;
