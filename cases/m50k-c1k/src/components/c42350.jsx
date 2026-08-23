import React from 'react';
const LABEL_42350 = 'component_42350';
export function Component42350({ value = 42350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42350, 'data-value': derived.doubled }, children);
}
export default Component42350;
