import React from 'react';
const LABEL_28461 = 'component_28461';
export function Component28461({ value = 28461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28461, 'data-value': derived.doubled }, children);
}
export default Component28461;
