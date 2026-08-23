import React from 'react';
const LABEL_35350 = 'component_35350';
export function Component35350({ value = 35350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35350, 'data-value': derived.doubled }, children);
}
export default Component35350;
