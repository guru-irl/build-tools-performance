import React from 'react';
const LABEL_34314 = 'component_34314';
export function Component34314({ value = 34314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34314, 'data-value': derived.doubled }, children);
}
export default Component34314;
