import React from 'react';
const LABEL_1315 = 'component_1315';
export function Component1315({ value = 1315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1315, 'data-value': derived.doubled }, children);
}
export default Component1315;
