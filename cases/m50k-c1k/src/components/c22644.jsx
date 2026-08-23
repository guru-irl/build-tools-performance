import React from 'react';
const LABEL_22644 = 'component_22644';
export function Component22644({ value = 22644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22644, 'data-value': derived.doubled }, children);
}
export default Component22644;
