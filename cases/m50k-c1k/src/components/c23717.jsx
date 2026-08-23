import React from 'react';
const LABEL_23717 = 'component_23717';
export function Component23717({ value = 23717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23717, 'data-value': derived.doubled }, children);
}
export default Component23717;
