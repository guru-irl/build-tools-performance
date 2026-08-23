import React from 'react';
const LABEL_36945 = 'component_36945';
export function Component36945({ value = 36945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36945, 'data-value': derived.doubled }, children);
}
export default Component36945;
