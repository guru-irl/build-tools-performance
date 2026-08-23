import React from 'react';
const LABEL_8644 = 'component_8644';
export function Component8644({ value = 8644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8644, 'data-value': derived.doubled }, children);
}
export default Component8644;
