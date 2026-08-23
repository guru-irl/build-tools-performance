import React from 'react';
const LABEL_18460 = 'component_18460';
export function Component18460({ value = 18460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18460, 'data-value': derived.doubled }, children);
}
export default Component18460;
