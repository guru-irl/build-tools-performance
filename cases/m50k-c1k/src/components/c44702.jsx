import React from 'react';
const LABEL_44702 = 'component_44702';
export function Component44702({ value = 44702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44702, 'data-value': derived.doubled }, children);
}
export default Component44702;
