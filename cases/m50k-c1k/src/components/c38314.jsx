import React from 'react';
const LABEL_38314 = 'component_38314';
export function Component38314({ value = 38314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38314, 'data-value': derived.doubled }, children);
}
export default Component38314;
