import React from 'react';
const LABEL_15315 = 'component_15315';
export function Component15315({ value = 15315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15315, 'data-value': derived.doubled }, children);
}
export default Component15315;
