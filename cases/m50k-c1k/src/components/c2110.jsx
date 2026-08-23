import React from 'react';
const LABEL_2110 = 'component_2110';
export function Component2110({ value = 2110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2110, 'data-value': derived.doubled }, children);
}
export default Component2110;
