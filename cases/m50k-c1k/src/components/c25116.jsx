import React from 'react';
const LABEL_25116 = 'component_25116';
export function Component25116({ value = 25116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25116, 'data-value': derived.doubled }, children);
}
export default Component25116;
