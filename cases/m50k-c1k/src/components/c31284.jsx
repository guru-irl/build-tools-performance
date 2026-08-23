import React from 'react';
const LABEL_31284 = 'component_31284';
export function Component31284({ value = 31284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31284, 'data-value': derived.doubled }, children);
}
export default Component31284;
