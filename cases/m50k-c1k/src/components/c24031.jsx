import React from 'react';
const LABEL_24031 = 'component_24031';
export function Component24031({ value = 24031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24031, 'data-value': derived.doubled }, children);
}
export default Component24031;
