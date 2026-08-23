import React from 'react';
const LABEL_36702 = 'component_36702';
export function Component36702({ value = 36702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36702, 'data-value': derived.doubled }, children);
}
export default Component36702;
