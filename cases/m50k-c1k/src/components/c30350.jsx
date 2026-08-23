import React from 'react';
const LABEL_30350 = 'component_30350';
export function Component30350({ value = 30350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30350, 'data-value': derived.doubled }, children);
}
export default Component30350;
