import React from 'react';
const LABEL_44354 = 'component_44354';
export function Component44354({ value = 44354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44354, 'data-value': derived.doubled }, children);
}
export default Component44354;
