import React from 'react';
const LABEL_28529 = 'component_28529';
export function Component28529({ value = 28529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28529, 'data-value': derived.doubled }, children);
}
export default Component28529;
