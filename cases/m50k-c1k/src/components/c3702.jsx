import React from 'react';
const LABEL_3702 = 'component_3702';
export function Component3702({ value = 3702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3702, 'data-value': derived.doubled }, children);
}
export default Component3702;
