import React from 'react';
const LABEL_23702 = 'component_23702';
export function Component23702({ value = 23702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23702, 'data-value': derived.doubled }, children);
}
export default Component23702;
