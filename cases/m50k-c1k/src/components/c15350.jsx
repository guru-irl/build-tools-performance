import React from 'react';
const LABEL_15350 = 'component_15350';
export function Component15350({ value = 15350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15350, 'data-value': derived.doubled }, children);
}
export default Component15350;
