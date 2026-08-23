import React from 'react';
const LABEL_36644 = 'component_36644';
export function Component36644({ value = 36644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36644, 'data-value': derived.doubled }, children);
}
export default Component36644;
