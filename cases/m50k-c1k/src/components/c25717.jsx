import React from 'react';
const LABEL_25717 = 'component_25717';
export function Component25717({ value = 25717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25717, 'data-value': derived.doubled }, children);
}
export default Component25717;
