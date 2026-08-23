import React from 'react';
const LABEL_10825 = 'component_10825';
export function Component10825({ value = 10825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10825, 'data-value': derived.doubled }, children);
}
export default Component10825;
