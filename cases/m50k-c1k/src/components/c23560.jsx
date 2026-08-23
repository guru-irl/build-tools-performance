import React from 'react';
const LABEL_23560 = 'component_23560';
export function Component23560({ value = 23560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23560, 'data-value': derived.doubled }, children);
}
export default Component23560;
