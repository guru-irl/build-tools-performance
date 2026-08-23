import React from 'react';
const LABEL_23855 = 'component_23855';
export function Component23855({ value = 23855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23855, 'data-value': derived.doubled }, children);
}
export default Component23855;
