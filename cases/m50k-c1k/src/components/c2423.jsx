import React from 'react';
const LABEL_2423 = 'component_2423';
export function Component2423({ value = 2423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2423, 'data-value': derived.doubled }, children);
}
export default Component2423;
