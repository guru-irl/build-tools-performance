import React from 'react';
const LABEL_44315 = 'component_44315';
export function Component44315({ value = 44315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44315, 'data-value': derived.doubled }, children);
}
export default Component44315;
