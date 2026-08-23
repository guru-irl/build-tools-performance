import React from 'react';
const LABEL_44940 = 'component_44940';
export function Component44940({ value = 44940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44940, 'data-value': derived.doubled }, children);
}
export default Component44940;
