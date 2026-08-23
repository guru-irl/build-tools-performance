import React from 'react';
const LABEL_44117 = 'component_44117';
export function Component44117({ value = 44117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44117, 'data-value': derived.doubled }, children);
}
export default Component44117;
