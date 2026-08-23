import React from 'react';
const LABEL_46315 = 'component_46315';
export function Component46315({ value = 46315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46315, 'data-value': derived.doubled }, children);
}
export default Component46315;
