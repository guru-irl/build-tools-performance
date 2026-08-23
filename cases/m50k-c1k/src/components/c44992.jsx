import React from 'react';
const LABEL_44992 = 'component_44992';
export function Component44992({ value = 44992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44992, 'data-value': derived.doubled }, children);
}
export default Component44992;
