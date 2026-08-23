import React from 'react';
const LABEL_44626 = 'component_44626';
export function Component44626({ value = 44626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44626, 'data-value': derived.doubled }, children);
}
export default Component44626;
