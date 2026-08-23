import React from 'react';
const LABEL_1454 = 'component_1454';
export function Component1454({ value = 1454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1454, 'data-value': derived.doubled }, children);
}
export default Component1454;
