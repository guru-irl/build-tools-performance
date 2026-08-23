import React from 'react';
const LABEL_11116 = 'component_11116';
export function Component11116({ value = 11116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11116, 'data-value': derived.doubled }, children);
}
export default Component11116;
