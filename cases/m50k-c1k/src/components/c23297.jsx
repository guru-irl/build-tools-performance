import React from 'react';
const LABEL_23297 = 'component_23297';
export function Component23297({ value = 23297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23297, 'data-value': derived.doubled }, children);
}
export default Component23297;
