import React from 'react';
const LABEL_1470 = 'component_1470';
export function Component1470({ value = 1470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1470, 'data-value': derived.doubled }, children);
}
export default Component1470;
