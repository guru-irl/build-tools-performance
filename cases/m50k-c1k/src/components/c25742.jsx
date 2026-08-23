import React from 'react';
const LABEL_25742 = 'component_25742';
export function Component25742({ value = 25742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25742, 'data-value': derived.doubled }, children);
}
export default Component25742;
