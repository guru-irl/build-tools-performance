import React from 'react';
const LABEL_15276 = 'component_15276';
export function Component15276({ value = 15276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15276, 'data-value': derived.doubled }, children);
}
export default Component15276;
