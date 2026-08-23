import React from 'react';
const LABEL_29825 = 'component_29825';
export function Component29825({ value = 29825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29825, 'data-value': derived.doubled }, children);
}
export default Component29825;
