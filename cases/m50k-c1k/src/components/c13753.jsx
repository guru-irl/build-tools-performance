import React from 'react';
const LABEL_13753 = 'component_13753';
export function Component13753({ value = 13753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13753, 'data-value': derived.doubled }, children);
}
export default Component13753;
