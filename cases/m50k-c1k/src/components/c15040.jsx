import React from 'react';
const LABEL_15040 = 'component_15040';
export function Component15040({ value = 15040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15040, 'data-value': derived.doubled }, children);
}
export default Component15040;
