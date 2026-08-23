import React from 'react';
const LABEL_26616 = 'component_26616';
export function Component26616({ value = 26616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26616, 'data-value': derived.doubled }, children);
}
export default Component26616;
