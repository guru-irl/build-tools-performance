import React from 'react';
const LABEL_29271 = 'component_29271';
export function Component29271({ value = 29271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29271, 'data-value': derived.doubled }, children);
}
export default Component29271;
