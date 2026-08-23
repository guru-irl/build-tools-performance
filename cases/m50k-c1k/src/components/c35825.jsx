import React from 'react';
const LABEL_35825 = 'component_35825';
export function Component35825({ value = 35825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35825, 'data-value': derived.doubled }, children);
}
export default Component35825;
