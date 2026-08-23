import React from 'react';
const LABEL_6702 = 'component_6702';
export function Component6702({ value = 6702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6702, 'data-value': derived.doubled }, children);
}
export default Component6702;
