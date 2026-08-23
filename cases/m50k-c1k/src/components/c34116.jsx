import React from 'react';
const LABEL_34116 = 'component_34116';
export function Component34116({ value = 34116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34116, 'data-value': derived.doubled }, children);
}
export default Component34116;
