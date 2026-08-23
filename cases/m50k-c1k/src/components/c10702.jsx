import React from 'react';
const LABEL_10702 = 'component_10702';
export function Component10702({ value = 10702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10702, 'data-value': derived.doubled }, children);
}
export default Component10702;
