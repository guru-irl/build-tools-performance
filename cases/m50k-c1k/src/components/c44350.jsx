import React from 'react';
const LABEL_44350 = 'component_44350';
export function Component44350({ value = 44350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44350, 'data-value': derived.doubled }, children);
}
export default Component44350;
