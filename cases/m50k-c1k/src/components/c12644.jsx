import React from 'react';
const LABEL_12644 = 'component_12644';
export function Component12644({ value = 12644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12644, 'data-value': derived.doubled }, children);
}
export default Component12644;
