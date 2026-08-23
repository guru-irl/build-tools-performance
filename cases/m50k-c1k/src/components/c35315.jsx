import React from 'react';
const LABEL_35315 = 'component_35315';
export function Component35315({ value = 35315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35315, 'data-value': derived.doubled }, children);
}
export default Component35315;
