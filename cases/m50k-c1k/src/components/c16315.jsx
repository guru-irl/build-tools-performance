import React from 'react';
const LABEL_16315 = 'component_16315';
export function Component16315({ value = 16315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16315, 'data-value': derived.doubled }, children);
}
export default Component16315;
