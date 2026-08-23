import React from 'react';
const LABEL_40284 = 'component_40284';
export function Component40284({ value = 40284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40284, 'data-value': derived.doubled }, children);
}
export default Component40284;
