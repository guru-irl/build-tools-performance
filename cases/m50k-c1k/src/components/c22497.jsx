import React from 'react';
const LABEL_22497 = 'component_22497';
export function Component22497({ value = 22497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22497, 'data-value': derived.doubled }, children);
}
export default Component22497;
