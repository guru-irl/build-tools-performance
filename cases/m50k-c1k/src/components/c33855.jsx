import React from 'react';
const LABEL_33855 = 'component_33855';
export function Component33855({ value = 33855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33855, 'data-value': derived.doubled }, children);
}
export default Component33855;
