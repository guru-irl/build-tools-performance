import React from 'react';
const LABEL_28612 = 'component_28612';
export function Component28612({ value = 28612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28612, 'data-value': derived.doubled }, children);
}
export default Component28612;
