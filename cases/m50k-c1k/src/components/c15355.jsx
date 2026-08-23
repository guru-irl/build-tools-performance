import React from 'react';
const LABEL_15355 = 'component_15355';
export function Component15355({ value = 15355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15355, 'data-value': derived.doubled }, children);
}
export default Component15355;
