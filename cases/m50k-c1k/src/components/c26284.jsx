import React from 'react';
const LABEL_26284 = 'component_26284';
export function Component26284({ value = 26284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26284, 'data-value': derived.doubled }, children);
}
export default Component26284;
