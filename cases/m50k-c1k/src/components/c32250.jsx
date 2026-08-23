import React from 'react';
const LABEL_32250 = 'component_32250';
export function Component32250({ value = 32250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32250, 'data-value': derived.doubled }, children);
}
export default Component32250;
