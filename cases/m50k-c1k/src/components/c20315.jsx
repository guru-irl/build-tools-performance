import React from 'react';
const LABEL_20315 = 'component_20315';
export function Component20315({ value = 20315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20315, 'data-value': derived.doubled }, children);
}
export default Component20315;
