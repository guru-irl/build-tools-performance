import React from 'react';
const LABEL_35702 = 'component_35702';
export function Component35702({ value = 35702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35702, 'data-value': derived.doubled }, children);
}
export default Component35702;
