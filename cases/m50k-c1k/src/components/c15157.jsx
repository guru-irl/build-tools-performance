import React from 'react';
const LABEL_15157 = 'component_15157';
export function Component15157({ value = 15157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15157, 'data-value': derived.doubled }, children);
}
export default Component15157;
