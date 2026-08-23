import React from 'react';
const LABEL_22825 = 'component_22825';
export function Component22825({ value = 22825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22825, 'data-value': derived.doubled }, children);
}
export default Component22825;
