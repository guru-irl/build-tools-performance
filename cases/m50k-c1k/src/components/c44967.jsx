import React from 'react';
const LABEL_44967 = 'component_44967';
export function Component44967({ value = 44967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44967, 'data-value': derived.doubled }, children);
}
export default Component44967;
