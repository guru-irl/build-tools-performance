import React from 'react';
const LABEL_42528 = 'component_42528';
export function Component42528({ value = 42528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42528, 'data-value': derived.doubled }, children);
}
export default Component42528;
