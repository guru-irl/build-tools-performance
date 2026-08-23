import React from 'react';
const LABEL_44979 = 'component_44979';
export function Component44979({ value = 44979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44979, 'data-value': derived.doubled }, children);
}
export default Component44979;
