import React from 'react';
const LABEL_33702 = 'component_33702';
export function Component33702({ value = 33702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33702, 'data-value': derived.doubled }, children);
}
export default Component33702;
