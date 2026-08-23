import React from 'react';
const LABEL_5644 = 'component_5644';
export function Component5644({ value = 5644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5644, 'data-value': derived.doubled }, children);
}
export default Component5644;
