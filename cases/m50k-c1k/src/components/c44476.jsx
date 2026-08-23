import React from 'react';
const LABEL_44476 = 'component_44476';
export function Component44476({ value = 44476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44476, 'data-value': derived.doubled }, children);
}
export default Component44476;
