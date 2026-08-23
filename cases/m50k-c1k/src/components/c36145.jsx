import React from 'react';
const LABEL_36145 = 'component_36145';
export function Component36145({ value = 36145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36145, 'data-value': derived.doubled }, children);
}
export default Component36145;
