import React from 'react';
const LABEL_3350 = 'component_3350';
export function Component3350({ value = 3350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3350, 'data-value': derived.doubled }, children);
}
export default Component3350;
