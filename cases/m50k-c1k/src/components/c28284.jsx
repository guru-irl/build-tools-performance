import React from 'react';
const LABEL_28284 = 'component_28284';
export function Component28284({ value = 28284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28284, 'data-value': derived.doubled }, children);
}
export default Component28284;
