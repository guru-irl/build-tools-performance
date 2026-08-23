import React from 'react';
const LABEL_13644 = 'component_13644';
export function Component13644({ value = 13644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13644, 'data-value': derived.doubled }, children);
}
export default Component13644;
