import React from 'react';
const LABEL_10145 = 'component_10145';
export function Component10145({ value = 10145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10145, 'data-value': derived.doubled }, children);
}
export default Component10145;
