import React from 'react';
const LABEL_1187 = 'component_1187';
export function Component1187({ value = 1187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1187, 'data-value': derived.doubled }, children);
}
export default Component1187;
