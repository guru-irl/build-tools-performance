import React from 'react';
const LABEL_15712 = 'component_15712';
export function Component15712({ value = 15712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15712, 'data-value': derived.doubled }, children);
}
export default Component15712;
