import React from 'react';
const LABEL_21750 = 'component_21750';
export function Component21750({ value = 21750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21750, 'data-value': derived.doubled }, children);
}
export default Component21750;
