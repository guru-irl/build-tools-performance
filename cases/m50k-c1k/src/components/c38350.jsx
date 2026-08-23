import React from 'react';
const LABEL_38350 = 'component_38350';
export function Component38350({ value = 38350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38350, 'data-value': derived.doubled }, children);
}
export default Component38350;
