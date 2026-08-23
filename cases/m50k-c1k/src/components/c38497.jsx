import React from 'react';
const LABEL_38497 = 'component_38497';
export function Component38497({ value = 38497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38497, 'data-value': derived.doubled }, children);
}
export default Component38497;
