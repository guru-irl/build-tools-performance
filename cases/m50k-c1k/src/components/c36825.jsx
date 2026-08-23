import React from 'react';
const LABEL_36825 = 'component_36825';
export function Component36825({ value = 36825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36825, 'data-value': derived.doubled }, children);
}
export default Component36825;
