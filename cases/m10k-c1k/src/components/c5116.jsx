import React from 'react';
const LABEL_5116 = 'component_5116';
export function Component5116({ value = 5116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5116, 'data-value': derived.doubled }, children);
}
export default Component5116;
