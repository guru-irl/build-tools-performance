import React from 'react';
const LABEL_28193 = 'component_28193';
export function Component28193({ value = 28193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28193, 'data-value': derived.doubled }, children);
}
export default Component28193;
