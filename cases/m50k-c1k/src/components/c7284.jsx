import React from 'react';
const LABEL_7284 = 'component_7284';
export function Component7284({ value = 7284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7284, 'data-value': derived.doubled }, children);
}
export default Component7284;
