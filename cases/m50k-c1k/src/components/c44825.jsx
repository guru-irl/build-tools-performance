import React from 'react';
const LABEL_44825 = 'component_44825';
export function Component44825({ value = 44825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44825, 'data-value': derived.doubled }, children);
}
export default Component44825;
