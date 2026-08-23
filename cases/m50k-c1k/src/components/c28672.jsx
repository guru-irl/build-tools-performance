import React from 'react';
const LABEL_28672 = 'component_28672';
export function Component28672({ value = 28672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28672, 'data-value': derived.doubled }, children);
}
export default Component28672;
