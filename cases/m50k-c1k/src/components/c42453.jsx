import React from 'react';
const LABEL_42453 = 'component_42453';
export function Component42453({ value = 42453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42453, 'data-value': derived.doubled }, children);
}
export default Component42453;
