import React from 'react';
const LABEL_14222 = 'component_14222';
export function Component14222({ value = 14222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14222, 'data-value': derived.doubled }, children);
}
export default Component14222;
