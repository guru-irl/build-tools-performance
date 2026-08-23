import React from 'react';
const LABEL_28170 = 'component_28170';
export function Component28170({ value = 28170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28170, 'data-value': derived.doubled }, children);
}
export default Component28170;
