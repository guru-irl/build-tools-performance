import React from 'react';
const LABEL_14644 = 'component_14644';
export function Component14644({ value = 14644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14644, 'data-value': derived.doubled }, children);
}
export default Component14644;
