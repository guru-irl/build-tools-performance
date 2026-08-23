import React from 'react';
const LABEL_1395 = 'component_1395';
export function Component1395({ value = 1395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1395, 'data-value': derived.doubled }, children);
}
export default Component1395;
