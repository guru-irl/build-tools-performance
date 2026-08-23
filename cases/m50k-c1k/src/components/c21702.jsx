import React from 'react';
const LABEL_21702 = 'component_21702';
export function Component21702({ value = 21702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21702, 'data-value': derived.doubled }, children);
}
export default Component21702;
