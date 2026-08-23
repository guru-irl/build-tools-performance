import React from 'react';
const LABEL_19702 = 'component_19702';
export function Component19702({ value = 19702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19702, 'data-value': derived.doubled }, children);
}
export default Component19702;
