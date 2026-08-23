import React from 'react';
const LABEL_22702 = 'component_22702';
export function Component22702({ value = 22702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22702, 'data-value': derived.doubled }, children);
}
export default Component22702;
