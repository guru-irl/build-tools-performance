import React from 'react';
const LABEL_14391 = 'component_14391';
export function Component14391({ value = 14391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14391, 'data-value': derived.doubled }, children);
}
export default Component14391;
