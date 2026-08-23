import React from 'react';
const LABEL_23874 = 'component_23874';
export function Component23874({ value = 23874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23874, 'data-value': derived.doubled }, children);
}
export default Component23874;
