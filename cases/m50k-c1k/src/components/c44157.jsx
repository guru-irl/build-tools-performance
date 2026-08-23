import React from 'react';
const LABEL_44157 = 'component_44157';
export function Component44157({ value = 44157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44157, 'data-value': derived.doubled }, children);
}
export default Component44157;
