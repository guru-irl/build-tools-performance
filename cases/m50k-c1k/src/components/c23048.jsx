import React from 'react';
const LABEL_23048 = 'component_23048';
export function Component23048({ value = 23048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23048, 'data-value': derived.doubled }, children);
}
export default Component23048;
