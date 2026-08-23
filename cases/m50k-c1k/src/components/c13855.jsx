import React from 'react';
const LABEL_13855 = 'component_13855';
export function Component13855({ value = 13855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13855, 'data-value': derived.doubled }, children);
}
export default Component13855;
