import React from 'react';
const LABEL_28855 = 'component_28855';
export function Component28855({ value = 28855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28855, 'data-value': derived.doubled }, children);
}
export default Component28855;
