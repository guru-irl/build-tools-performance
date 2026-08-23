import React from 'react';
const LABEL_33717 = 'component_33717';
export function Component33717({ value = 33717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33717, 'data-value': derived.doubled }, children);
}
export default Component33717;
