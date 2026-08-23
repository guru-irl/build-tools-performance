import React from 'react';
const LABEL_44794 = 'component_44794';
export function Component44794({ value = 44794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44794, 'data-value': derived.doubled }, children);
}
export default Component44794;
