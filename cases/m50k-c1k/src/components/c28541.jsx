import React from 'react';
const LABEL_28541 = 'component_28541';
export function Component28541({ value = 28541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28541, 'data-value': derived.doubled }, children);
}
export default Component28541;
