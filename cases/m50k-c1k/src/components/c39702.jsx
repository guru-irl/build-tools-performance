import React from 'react';
const LABEL_39702 = 'component_39702';
export function Component39702({ value = 39702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39702, 'data-value': derived.doubled }, children);
}
export default Component39702;
