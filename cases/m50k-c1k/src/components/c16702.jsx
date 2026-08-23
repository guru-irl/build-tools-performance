import React from 'react';
const LABEL_16702 = 'component_16702';
export function Component16702({ value = 16702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16702, 'data-value': derived.doubled }, children);
}
export default Component16702;
