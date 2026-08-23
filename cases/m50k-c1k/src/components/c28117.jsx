import React from 'react';
const LABEL_28117 = 'component_28117';
export function Component28117({ value = 28117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28117, 'data-value': derived.doubled }, children);
}
export default Component28117;
