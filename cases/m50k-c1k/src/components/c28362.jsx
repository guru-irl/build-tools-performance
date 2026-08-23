import React from 'react';
const LABEL_28362 = 'component_28362';
export function Component28362({ value = 28362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28362, 'data-value': derived.doubled }, children);
}
export default Component28362;
