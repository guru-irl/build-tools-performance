import React from 'react';
const LABEL_1644 = 'component_1644';
export function Component1644({ value = 1644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1644, 'data-value': derived.doubled }, children);
}
export default Component1644;
