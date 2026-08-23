import React from 'react';
const LABEL_5004 = 'component_5004';
export function Component5004({ value = 5004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5004, 'data-value': derived.doubled }, children);
}
export default Component5004;
