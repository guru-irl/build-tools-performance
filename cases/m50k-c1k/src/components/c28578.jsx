import React from 'react';
const LABEL_28578 = 'component_28578';
export function Component28578({ value = 28578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28578, 'data-value': derived.doubled }, children);
}
export default Component28578;
