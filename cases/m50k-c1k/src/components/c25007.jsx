import React from 'react';
const LABEL_25007 = 'component_25007';
export function Component25007({ value = 25007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25007, 'data-value': derived.doubled }, children);
}
export default Component25007;
