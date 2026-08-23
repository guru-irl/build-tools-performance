import React from 'react';
const LABEL_29187 = 'component_29187';
export function Component29187({ value = 29187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29187, 'data-value': derived.doubled }, children);
}
export default Component29187;
